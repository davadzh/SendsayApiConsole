import {put, call} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {authenticateSuccess, authenticateFailure, SendsayLoginPayloadType, logoutSuccess} from 'src/store/actions/auth';
// @ts-ignore
import {all, takeLatest} from 'redux-saga/effects';
import {deleteCookie} from '../../helpers/cookieHelper';
import {Action} from 'redux-actions';

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch ({id}) {
    if (id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga({payload}: Action<SendsayLoginPayloadType>) {
  let authErrorMessage: string | null = null;

  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    })
    .catch((err: Error) => {
      authErrorMessage = JSON.stringify(err);
    });

  if (!api.sendsay.session) {
    yield put(authenticateFailure({authErrorMessage}));
    yield call(logoutSaga);
  } else {
    document.cookie = `sendsay_session=${api.sendsay.session}`;
    yield put(
      authenticateSuccess({
        sessionKey: api.sendsay.session,
        login: payload.login,
        sublogin: payload.sublogin,
      })
    );
  }
}

export function* logoutSaga() {
  deleteCookie('sendsay_session');
  api.sendsay.session = null;
  yield put(logoutSuccess());
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.LOGIN, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}

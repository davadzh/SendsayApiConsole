import {put, call, Effect} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';
import {v4 as uuid_v4} from 'uuid';

import {ActionTypes} from 'src/store/constants';
// @ts-ignore
import {all, takeLatest} from 'redux-saga/effects';
import {Action} from 'redux-actions';
import {addRequestToHistory, setCurrentErrorResponse, setCurrentSuccessResponse, setHasRequestSyntaxError} from '../actions';

type AddRequestToHistorySagaPropsType = {
  request: {
    action?: string;
  };
  hasError: boolean;
};

export function* addRequestToHistorySaga(data: AddRequestToHistorySagaPropsType | undefined) {
  if (data) {
    const id = uuid_v4();
    yield put(
      addRequestToHistory({
        request: {
          id: id,
          actionName: data.request.action ?? 'untitled',
          hasError: data.hasError,
          requestText: JSON.stringify(data.request, null, 4),
        },
      })
    );
  }
}

export function getRequestObject(request: string) {
  try {
    return JSON.parse(request!);
  } catch (error) {
    return null;
  }
}

export function* sendRequestSaga({payload}: Action<string>): Generator<Effect, void, Object | undefined> {
  const request: Object | undefined = getRequestObject(payload);
  if (!request) {
    yield put(setHasRequestSyntaxError({hasRequestSyntaxError: true}));
    return;
  }

  try {
    const response = yield call(api.sendsay.request, JSON.parse(payload));
    const responseString = JSON.stringify(response, null, 4);
    yield put(setCurrentSuccessResponse({currentResponse: responseString}));
    yield call(addRequestToHistorySaga, {
      request: request,
      hasError: false,
    });
  } catch (error) {
    const errorString = JSON.stringify(error, null, 4);
    yield put(setCurrentErrorResponse({currentResponse: errorString}));
    yield call(addRequestToHistorySaga, {
      request: request,
      hasError: true,
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.SEND_REQUEST, sendRequestSaga)]);
}

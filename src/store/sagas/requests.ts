import {put, call} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';
import { uuid } from 'uuidv4';

import {ActionTypes} from 'src/store/constants';
import {authenticateSuccess, authenticateFailure, SendsayLoginPayloadType} from 'src/store/actions/auth';
// @ts-ignore
import { all, takeLatest } from 'redux-saga/effects';
import {deleteCookie} from '../../helpers/cookieHelper';
import {Action} from 'redux-actions';
import {addRequestToHistory, setCurrentResponse, setHasRequestSyntaxError} from '../actions';


export function* addRequestToHistorySaga(request: Object | undefined,
                                     response: Object | undefined,
                                     hasError: boolean | undefined) {
  if (response !== undefined
      && hasError !== undefined) {
    // @ts-ignore
    let actionName: string = request["action"] ?? "untitled";
    const id = uuid();
    yield put(addRequestToHistory({
      request: {
        id: id,
        actionName: actionName,
        hasError: hasError,
        requestText: JSON.stringify(request, null, 4)
      }
    }));

  }
}

export function getRequestObject(request: string) {
  try {
    return JSON.parse(request!);
  }
  catch (error) {
    return null
  }
}

export function* sendRequestSaga({payload}: Action<string>) {
  const request: Object = getRequestObject(payload);
  if (!request) {
    yield put(setHasRequestSyntaxError({hasRequestSyntaxError: true}))
    return;
  }
  yield put(setHasRequestSyntaxError({hasRequestSyntaxError: false}))

  let responseString: string = '';
  let response: Object;
  let hasError: boolean = true;
  try {
    yield api.sendsay.request(JSON.parse(payload)).then((data: any) => {
      responseString = JSON.stringify(data, null, 4);
      hasError = false;
    });

  } catch (error) {
    responseString = JSON.stringify(error, null, 4);
  } finally {
    response = JSON.parse(responseString);
  }
  yield put(setCurrentResponse({currentResponse: responseString}));

  yield call(addRequestToHistorySaga, request, response, hasError);
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.SEND_REQUEST, sendRequestSaga),
  ]);
}

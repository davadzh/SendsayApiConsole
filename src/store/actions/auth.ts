import {createAction, createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export type SendsayLoginPayloadType = {
  login: string,
  sublogin: string,
  password: string,
}

export type AuthSuccessPayloadType = {
  sessionKey: string,
  login: string,
  sublogin?: string,
}

export const authenticate = createAction(ActionTypes.AUTHENTICATE, (payload: any) => payload);
export const authenticateSuccess = createAction(ActionTypes.AUTHENTICATE_SUCCESS, (payload: any) => payload);

export const {authenticateCheck, authenticateFailure, logout} = createActions({
  [ActionTypes.AUTHENTICATE_CHECK]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_FAILURE]: (payload) => payload,
  [ActionTypes.LOGOUT]: (payload) => payload,
});

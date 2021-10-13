import {createAction} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export type SendsayLoginPayloadType = {
  login: string;
  sublogin: string;
  password: string;
};

//TODO избавиться от any
export const login = createAction(ActionTypes.LOGIN, (payload: any) => payload);
export const authenticateSuccess = createAction(ActionTypes.AUTHENTICATE_SUCCESS, (payload: any) => payload);
export const authenticateFailure = createAction(ActionTypes.AUTHENTICATE_FAILURE, (payload: any) => payload);
export const authenticateCheck = createAction(ActionTypes.AUTHENTICATE_CHECK);
export const logoutSuccess = createAction(ActionTypes.LOGOUT_SUCCESS);
export const logout = createAction(ActionTypes.LOGOUT);

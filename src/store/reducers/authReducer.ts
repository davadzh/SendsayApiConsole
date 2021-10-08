import {Action, handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';
import {SendsayLoginPayloadType} from '../actions';

export type AuthStateType = {
  loading: boolean,
  sessionKey: string | null,
  login: string | null,
  sublogin?: string | null,
}

export const initialState: AuthStateType = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
};

export default {
  auth: handleActions<AuthStateType>(
    {
      [ActionTypes.AUTHENTICATE]: (state, {payload}) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          sessionKey: payload.sessionKey,
          login: payload.login,
          sublogin: payload.sublogin,
        };
      },
      [ActionTypes.AUTHENTICATE_FAILURE]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
          login: null,
          sublogin: null,
        };
      },
      [ActionTypes.LOGOUT]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
        };
      },
    },
    initialState
  ),
};

import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

type AuthStateType = {
  isLoading: boolean;
  isLoggedIn: boolean;
  login: string | null;
  sublogin?: string | null;
  authErrorMessage?: string | null;
};

type ErrorStateType = {
  authErrorMessage?: string | null;
};

//TODO Убрать isLoggedIn, isLoading из персистора
const authInitialState: AuthStateType = {
  isLoading: false,
  isLoggedIn: false,
  login: null,
  sublogin: null,
  authErrorMessage: null,
};

const errorInitialState: ErrorStateType = {
  authErrorMessage: null,
};

export default {
  auth: handleActions<AuthStateType>(
    {
      [ActionTypes.LOGIN]: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          login: payload.login,
          sublogin: payload.sublogin,
        };
      },
      [ActionTypes.LOGOUT_SUCCESS]: (state) => {
        return {
          ...state,
          isLoading: false,
          isLoggedIn: false,
          login: null,
          sublogin: null,
        };
      },
    },
    authInitialState
  ),

  error: handleActions<ErrorStateType>(
    {
      [ActionTypes.AUTHENTICATE_FAILURE]: (state, {payload}) => {
        return {
          ...state,
          authErrorMessage: payload.authErrorMessage,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state) => {
        return {
          ...state,
          authErrorMessage: null,
        };
      },
    },
    errorInitialState
  ),
};

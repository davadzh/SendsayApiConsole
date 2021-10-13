import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export type Request = {
  id: string;
  actionName: string;
  hasError: boolean;
  requestText: string;
};

export type RequestsStateType = {
  requestsHistory: Request[];
  currentRequest: string;
  currentResponse: string;
  hasRequestSyntaxError: boolean;
  hasResponseError: boolean;
  isLoading: boolean;
};

export const initialState: RequestsStateType = {
  requestsHistory: [],
  currentRequest: '',
  currentResponse: '',
  hasRequestSyntaxError: false,
  hasResponseError: false,
  isLoading: false,
};

//TODO узнать, как передавать по разным action собственный payload,
// чтобы не использовать везде общий
type RequestsPayloadType = {
  currentResponse: string;
  currentRequest: string;
  hasRequestSyntaxError: boolean;
  request: Request;
};

export default {
  requests: handleActions<RequestsStateType, RequestsPayloadType>(
    {
      [ActionTypes.SEND_REQUEST]: (state) => {
        return {
          ...state,
          isLoading: true,
        };
      },
      [ActionTypes.SET_CURRENT_SUCCESS_RESPONSE]: (state, {payload}) => {
        return {
          ...state,
          hasResponseError: false,
          hasRequestSyntaxError: false,
          currentResponse: payload.currentResponse,
          isLoading: false,
        };
      },
      [ActionTypes.SET_CURRENT_ERROR_RESPONSE]: (state, {payload}) => {
        return {
          ...state,
          hasResponseError: true,
          hasRequestSyntaxError: false,
          currentResponse: payload.currentResponse,
          isLoading: false,
        };
      },
      [ActionTypes.SET_CURRENT_REQUEST]: (state, {payload}) => {
        return {
          ...state,
          currentRequest: payload.currentRequest,
          hasRequestSyntaxError: false,
        };
      },
      [ActionTypes.ADD_REQUEST_TO_HISTORY]: (state, {payload}) => {
        if (state.requestsHistory.some((x) => x.actionName === payload.request.actionName)) {
          return state;
        }
        if (state.requestsHistory.length === 15) {
          return {
            ...state,
            requestsHistory: [payload.request, ...state.requestsHistory.slice(0, 15)],
          };
        }
        return {
          ...state,
          requestsHistory: [payload.request, ...state.requestsHistory],
        };
      },
      [ActionTypes.SET_HAS_REQUEST_SYNTAX_ERROR]: (state, {payload}) => {
        return {
          ...state,
          hasRequestSyntaxError: payload.hasRequestSyntaxError,
          isLoading: false,
        };
      },
      [ActionTypes.CLEAR_REQUESTS]: (state) => {
        return {
          ...state,
          requestsHistory: [],
        };
      },
    },
    initialState
  ),
};

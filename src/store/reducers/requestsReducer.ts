import {Action, handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';
import {SendsayLoginPayloadType} from '../actions';

export type Request = {
  id: string,
  actionName: string,
  hasError: boolean,
  requestText: string
}

export type RequestsStateType = {
  requestsHistory: Request[],
  currentRequest: string,
  currentResponse: string,
  hasRequestSyntaxError: boolean,
}

export const initialState: RequestsStateType = {
  requestsHistory: [],
  currentRequest: '',
  currentResponse: '',
  hasRequestSyntaxError: false,
};

type RequestsPayloadType = {
  currentResponse: string,
  currentRequest: string,
  hasRequestSyntaxError: boolean,
  request: Request,
}


export default {
  requests: handleActions<RequestsStateType, RequestsPayloadType>(
    {
      [ActionTypes.SET_CURRENT_RESPONSE]: (state, {payload}) => {
        return {
          ...state,
          currentResponse: payload.currentResponse
        };
      },
      [ActionTypes.SET_CURRENT_REQUEST]: (state, {payload}) => {
        return {
          ...state,
          currentRequest: payload.currentRequest
        };
      },
      [ActionTypes.ADD_REQUEST_TO_HISTORY]: (state, {payload}) => {
        if (state.requestsHistory.some(x => x.actionName === payload.request.actionName)) {
          return state;
        }
        if (state.requestsHistory.length === 15) {
          return {
            ...state,
            requestsHistory: [payload.request, ...state.requestsHistory.slice(0, 15)]
          }
        }
        return {
          ...state,
          requestsHistory: [payload.request, ...state.requestsHistory]
        };
      },
      [ActionTypes.SET_HAS_REQUEST_SYNTAX_ERROR]: (state, {payload}) => {
        return {
          ...state,
          hasRequestSyntaxError: payload.hasRequestSyntaxError
        };
      },
      [ActionTypes.CLEAR_REQUESTS]: (state) => {
        return {
          ...state,
          requestsHistory: []
        };
      },
    },
    initialState
  ),
};

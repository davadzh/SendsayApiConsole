import {createAction} from 'redux-actions';
import {ActionTypes} from '../constants';

export const sendRequest = createAction(ActionTypes.SEND_REQUEST, (payload: any) => payload);
export const setCurrentRequest = createAction(ActionTypes.SET_CURRENT_REQUEST, (payload: any) => payload);
export const setCurrentResponse = createAction(ActionTypes.SET_CURRENT_RESPONSE, (payload: any) => payload);
export const setHasRequestSyntaxError = createAction(ActionTypes.SET_HAS_REQUEST_SYNTAX_ERROR, (payload: any) => payload);
export const addRequestToHistory = createAction(ActionTypes.ADD_REQUEST_TO_HISTORY, (payload: any) => payload);
export const clearRequests = createAction(ActionTypes.CLEAR_REQUESTS);
import requestsReducer from 'src/store/reducers/requestsReducer';
import loginReducer from 'src/store/reducers/authReducer';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {RequestsStateType} from './requestsReducer';
import {AuthStateType} from './authReducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, loginReducer.auth),
  requests: requestsReducer.requests,

});

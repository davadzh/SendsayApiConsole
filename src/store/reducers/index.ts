import requestsReducer from 'src/store/reducers/requestsReducer';
import loginReducer from 'src/store/reducers/authReducer';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, loginReducer.auth),
  error: loginReducer.error,
  requests: requestsReducer.requests,
});

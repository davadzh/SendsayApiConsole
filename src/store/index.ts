import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/store/sagas/index';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {},
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store;

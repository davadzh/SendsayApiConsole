import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/store/sagas/index';
import {applyMiddleware, configureStore, createStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import {combineReducers} from 'redux';
import storage from 'redux-persist/es/storage';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: {}
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// @ts-ignore
export const persistor = persistStore(store);
export default store;



// const bindMiddleware = (middleware: any) => {
//   if (process.env.NODE_ENV !== 'production') {
//     const {composeWithDevTools} = require('redux-devtools-extension');
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// function configureStore(initialState = {}) {
//   const store = createStore(
//     combineReducers({
//       auth: persistReducer(persistConfig, rootReducer.auth),
//     }),
//     initialState,
//     bindMiddleware([sagaMiddleware])
//   );
//   let persistor = persistStore(store);
//
//   // @ts-ignore
//   store.runSagaTask = () => {
//     store.sagaTask = sagaMiddleware.run(rootSaga);
//   };
//
//   store.runSagaTask();
//   return {
//     store,
//     persistor,
//   };
// }

// export default configureStore;



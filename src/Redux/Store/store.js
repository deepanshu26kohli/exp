import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import RootReducer from "../Reducer/RootReducer";
import rootSaga from '../Saga/RootSaga';

import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware()
const persistConfig = {
  key: 'root',
  storage, 
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
export const store = configureStore(
    {
    reducer : persistedReducer,
    middleware: [sagaMiddleware]
    }
);
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store);
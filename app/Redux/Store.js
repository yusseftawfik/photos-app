import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import Reducer from './Reducer';
import saga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: { city: Reducer },
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
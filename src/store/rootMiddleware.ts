import { getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const reduxSagaMonitorOptions = {};

const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const { run: runSaga } = sagaMiddleware;

/**
 * Array of all middlewares to apply to redux store
 */
const rootMiddleware = [...getDefaultMiddleware(), sagaMiddleware];

export { runSaga };
export default rootMiddleware;

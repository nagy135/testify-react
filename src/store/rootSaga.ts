import { all } from "redux-saga/effects";

import appSaga from "./app/appSaga";

/**
 * Generator function to yield all sagas in our store
 */
export default function* rootSaga() {
  yield all([appSaga()]);
}

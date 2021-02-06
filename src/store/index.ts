import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import rootMiddleware, { runSaga } from "./rootMiddleware";
import rootSaga from "./rootSaga";

/**
 * Configure redux store
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: rootMiddleware,
});

runSaga(rootSaga);

export default store;

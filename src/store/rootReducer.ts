import { AnyAction, combineReducers, createAction } from "@reduxjs/toolkit";
import { reducer as app } from "./app";

export const resetStore = createAction("@@reset/init");

/**
 * Function to combine all slices of state, to create global state object
 */
const appReducer = combineReducers({ app });

/**
 * Special reducer to reset whole store with reset action
 * @param state state
 * @param action action
 */
const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: AnyAction
) => {
  if (action.type === "@@reset/init") {
    state = undefined;
  }
  return appReducer(state, action);
};

export { appReducer };
export default rootReducer;

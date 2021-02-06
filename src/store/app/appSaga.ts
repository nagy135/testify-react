import { login } from "../../services/app.service";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import appReducer from "./appReducer";

const appActions = appReducer.actions;

/**
 * Login user to session and retrieve user profile
 * @param action action with credentials
 */
function* loginRequest({
  payload,
}: ReturnType<typeof appActions.loginRequest>) {
  try {
    // const response = yield call(login, payload.email, payload.password);

    yield delay(500);

    if (
      payload.email === "feri@testify.com" &&
      payload.password === "asdfasdf"
    ) {
      yield put(
        appActions.loginSuccess({
          firstName: "Feri",
          lastName: "Nagy",
          id: 1,
        })
      );
    } else {
      yield put(appActions.loginError("wrong_credentials"));
    }
  } catch (error) {
    yield put(appActions.loginError(":("));
  }
}

export default function* appAsync() {
  yield takeLatest(appActions.loginRequest, loginRequest);
}

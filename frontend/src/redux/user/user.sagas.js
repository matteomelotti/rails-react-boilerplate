import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import AuthService from '../../services/auth.service'
import {
  registerSuccess,
  setMessage,
  registerFail,
  loginStart,
  loginSuccess,
  loginFail,
  logoutSuccess,
  refreshTokenSuccess
} from './user.actions';

export function* register({payload: {username, email, password}}) {
  try {
    const response = yield AuthService.register(username, email, password)
    if (response) {
      yield put(registerSuccess());
      yield put(loginStart({ email, password }));
    }
  } catch (error) {
    const message = (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString();

    yield put(registerFail());
    yield put(setMessage(message));
  }
};

export function* login({payload: {email, password}}) {
  try {
    const data = yield AuthService.login(email, password)
    yield put(loginSuccess({ user: data }));
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
  
    yield put(loginFail());
    yield put(setMessage(message));
  }
};

export function* logout() {
  yield AuthService.logout();
  yield put(logoutSuccess());
};

export function* refreshToken(accessToken) {
  yield put(refreshTokenSuccess(accessToken));
}

// roba nuova

// export function* onSignUp() {
//   yield takeLatest(UserActionTypes.REGISTER_SUCCESS, register);
// }

export function* onLoginStart() {
  yield takeLatest(UserActionTypes.LOGIN_START, login);
}

export function* onRegisterStart() {
  yield takeLatest(UserActionTypes.REGISTER_START, register);
}


export function* onLogout() {
  yield takeLatest(UserActionTypes.LOGOUT_START, logout);
}

export function* onRefreshToken() {
  yield takeLatest(UserActionTypes.REFRESH_TOKEN, refreshToken);
}

export function* userSagas() {
  yield all([
    // call(onSignUp),
    call(onLoginStart),
    call(onLogout),
    call(onRefreshToken),
    call(onRegisterStart),
  ]);
}
import UserActionTypes from './user.types';

export const registerStart = userData => ({
  type: UserActionTypes.REGISTER_START,
  payload: userData
})

export const registerSuccess = () => ({
  type: UserActionTypes.REGISTER_SUCCESS
})

export const loginSuccess = user => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user
})

export const setMessage = message => ({
  type: UserActionTypes.SET_MESSAGE,
  payload: message
})

export const registerFail = () => ({
  type: UserActionTypes.REGISTER_FAIL
})

export const loginStart = userData => ({
  type: UserActionTypes.LOGIN_START,
  payload: userData
})

export const loginFail = () => ({
  type: UserActionTypes.LOGIN_FAIL
})

export const logoutSuccess = () => ({
  type: UserActionTypes.LOGOUT_SUCCESS
})

export const logoutStart = () => ({
  type: UserActionTypes.LOGOUT_START
})

export const refreshTokenSuccess = accessToken => ({
  type: UserActionTypes.REFRESH_TOKEN,
  payload: accessToken
})
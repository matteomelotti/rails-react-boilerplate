import UserActionTypes from './user.types';

const INITIAL_STATE = {
  isLoggedIn: false,
  currentUser: null,
  error: null,
  isLoading: false
};

// const user = JSON.parse(localStorage.getItem("user"));

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case UserActionTypes.REGISTER_START:
      return {
        ...state,
        isLoggedIn: false,
      };
    case UserActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    // case UserActionTypes.LOGIN_START:
    //   return {
    //     ...state,
    //     isLoggedIn: true,
    //     currentUser: payload.user,
    //   };
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: payload.user,
      };
    case UserActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: null,
      };
    case UserActionTypes.REFRESH_TOKEN:
      return {
        ...state,
        currentUser: { ...state.currentUser, accessToken: payload },
      };
    default:
      return state;
  }
};

export default userReducer;
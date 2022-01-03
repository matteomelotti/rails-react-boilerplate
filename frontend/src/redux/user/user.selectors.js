import { createSelector } from 'reselect';

const selectUser = state => state.user;
// const selectCurrentUserIsLoggedIn = state => state.isLoggedIn;
// const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectIsLoggedIn = createSelector(
  [selectUser],
  user => user.isLoggedIn
);

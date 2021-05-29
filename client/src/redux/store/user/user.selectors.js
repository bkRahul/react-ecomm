import { createSelector } from 'reselect';

//gets user state from state
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  //refers selectUser and then passes state to it
  [selectUser],
  //gets currentUser from selectUser
  user => user.currentUser
);

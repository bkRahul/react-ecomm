import * as actionTypes from '../actionsTypes';

export const setCurrentUser = user => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

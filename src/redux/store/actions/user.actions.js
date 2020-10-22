import { authActionTypes } from '../actionsTypes';

export const setCurrentUser = user => {
  return {
    type: authActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

//import { SHOP_DATA } from '../../../constants';

import { shopActionTypes } from './shop.actionTypes';

const INITIAL_STATE = {
  collections: {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;

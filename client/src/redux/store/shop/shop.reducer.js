//import { SHOP_DATA } from '../../../constants';

import { updateObject } from '../../../utils';
import { shopActionTypes } from './shop.actionTypes';

const INITIAL_STATE = {
  collections: null,
  loading: false,
  errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return updateObject(state, { loading: true });

    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return updateObject(state, {
        loading: false,
        collections: action.payload,
      });

    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return updateObject(state, {
        loading: false,
        errorMessage: action.payload,
      });

    default:
      return state;
  }
};

export default shopReducer;

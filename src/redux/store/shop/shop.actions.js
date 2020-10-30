import { shopActionTypes } from './shop.actionTypes';

export const updateCollections = collections => {
  return {
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collections,
  };
};

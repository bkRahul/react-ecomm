import { createSelector } from 'reselect';
//if collection was array
//import { COLLECTION_ID_MAP } from '../../../constants';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

//currying : function which returns another function
export const selectCollection = collectionUrlParam =>
  //createSelector is the returning function
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
    //if collection was array
    //collections =>collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  );

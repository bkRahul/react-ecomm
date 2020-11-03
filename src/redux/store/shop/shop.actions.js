import { convertSnapshotCollection, firestore } from '../../../utils/firebase';
import { shopActionTypes } from './shop.actionTypes';

export const fetchCollectionsStart = () => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollections = () => {
  return dispatch => {
    //get collection reference from collection at specified path
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef
      .get()
      .then(snapshot => {
        let collectionObject = convertSnapshotCollection(snapshot);
        dispatch(fetchCollectionsSuccess(collectionObject));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error)));
  };
};

export const fetchCollectionsSuccess = collections => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections,
  };
};

export const fetchCollectionsFailure = error => {
  return {
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    error: error,
  };
};

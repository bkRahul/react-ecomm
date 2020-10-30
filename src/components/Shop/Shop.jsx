import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { updateCollections } from '../../redux/store/shop/shop.actions';
import { convertSnapshotCollection, firestore } from '../../utils/firebase';
import Collection from '../Collection/Collection';
import CategoryOverview from './CategoryOverview/CategoryOverview';

const Shop = ({ match, updateCollections }) => {
  useEffect(() => {
    //get collection reference from collection at specified path
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(snapshot => {
      let collectionObject = convertSnapshotCollection(snapshot);
      updateCollections(collectionObject);
    });
  }, [updateCollections]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={CategoryOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionObject =>
    dispatch(updateCollections(collectionObject)),
});

export default connect(null, mapDispatchToProps)(Shop);

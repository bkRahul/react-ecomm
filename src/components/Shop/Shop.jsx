import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { convertSnapshotCollection, firestore } from '../../utils/firebase';
import withSpinner from '../../hoc/Spinner/withSpinner';
import { updateCollections } from '../../redux/store/shop/shop.actions';
import Collection from '../Collection/Collection';
import CategoryOverview from './CategoryOverview/CategoryOverview';

const Shop = ({ match, updateCollections }) => {
  const [loading, setLoading] = useState(true);

  const CategoryOverviewWithSpinner = withSpinner(CategoryOverview);
  const CollectionWithSpinner = withSpinner(Collection);

  useEffect(() => {
    //get collection reference from collection at specified path
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(snapshot => {
      let collectionObject = convertSnapshotCollection(snapshot);
      updateCollections(collectionObject);
      setLoading(false);
    });
  }, [updateCollections]);

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CategoryOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionObject =>
    dispatch(updateCollections(collectionObject)),
});

export default connect(null, mapDispatchToProps)(Shop);

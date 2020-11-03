import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import withSpinner from '../../hoc/Spinner/withSpinner';
import { fetchCollections } from '../../redux/store/shop/shop.actions';
import {
  selectCollections,
  selectIsLoading,
} from '../../redux/store/shop/shop.selectors';
import Collection from '../Collection/Collection';
import CategoryOverview from './CategoryOverview/CategoryOverview';

const Shop = ({ match, fetchCollections, loading, isCollectionLoaded }) => {
  const CategoryOverviewWithSpinner = withSpinner(CategoryOverview);
  const CollectionWithSpinner = withSpinner(Collection);

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);
  console.log('isCollectionLoaded=>>>>', isCollectionLoaded);
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
          <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  loading: selectIsLoading(state),
  isCollectionLoaded: !!selectCollections(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../Collection/Collection';
import CategoryOverview from './CategoryOverview/CategoryOverview';

export const Shop = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CategoryOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

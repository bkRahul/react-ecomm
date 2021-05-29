import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../../redux/store/shop/shop.selectors';

import { CategoryPreview } from './CategoryPreview/CategoryPreview';

const CategoryOverview = ({ collectionData }) => {
  return (
    <div>
      {collectionData.map(({ id, ...otherCategoryProps }) => (
        <CategoryPreview key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  collectionData: selectCollectionsForPreview(state),
});

export default connect(mapStateToProps)(CategoryOverview);

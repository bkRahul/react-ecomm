import React from 'react';
import { SHOP_DATA } from '../../constants';
import { CategoryPreview } from './CategoryPreview/CategoryPreview';

export const ShopPage = () => {
  return (
    <div>
      <p>ShopPage</p>
      {SHOP_DATA.map(({ id, ...otherCategoryProps }) => (
        <CategoryPreview key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

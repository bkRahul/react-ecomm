import React from 'react';
import classes from './CategoryPreview.module.scss';
import ProductPreviewItem from './ProductPreviewItem/ProductPreviewItem';

export const CategoryPreview = ({ title, items }) => {
  return (
    <div className={classes.CategoryPreview}>
      <h1 className={classes.Title}>{title.toUpperCase()}</h1>
      <div className={classes.Preview}>
        {items
          .filter((item, i) => i < 4)
          .map(item => (
            <ProductPreviewItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

import React from 'react';
import classes from './CategoryPreviewItem.module.scss';

export const CategoryPreviewItem = ({ id, name, imageUrl, price }) => {
  return (
    <div className={classes.CategoryPreviewItem}>
      <div
        className={classes.Image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.CollectionFooter}>
        <span className={classes.Name}>{name}</span>
        <span className={classes.Price}>{price}</span>
      </div>
    </div>
  );
};

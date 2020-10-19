import React from 'react';

import classes from './CategoryItem.module.scss';

const CategoryItem = ({ title, imageUrl, size }) => (
  <div
    className={`${size === 'large' ? classes.large : ''} ${
      classes.Category_item
    }`}
  >
    <div
      className={classes.background_image}
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className={classes.content}>
      <h1 className={classes.title}>{title.toUpperCase()}</h1>
      <span className={classes.subtitle}>SHOP NOW</span>
    </div>
  </div>
);

export default CategoryItem;

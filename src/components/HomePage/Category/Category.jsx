import React from 'react';
import { CATEGORY_DATA } from '../../../constants';

import classes from './Category.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';

export const Category = () => {
  return (
    <div className={classes.Category_menu}>
      {CATEGORY_DATA.map(({ id, ...otherSectionProps }) => (
        <CategoryItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

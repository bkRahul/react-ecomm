import React from 'react';
import { Category } from './Category/Category';

import classes from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={classes.Homepage}>
      <Category />
    </div>
  );
};

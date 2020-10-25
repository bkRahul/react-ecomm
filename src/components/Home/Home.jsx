import React from 'react';
import Category from './Category/Category';

import classes from './Home.module.scss';

export const Home = () => {
  return (
    <div className={classes.Home}>
      <Category />
    </div>
  );
};

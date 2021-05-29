import React from 'react';
import { connect } from 'react-redux';

import classes from './Category.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';

const Category = ({ categoryData }) => {
  return (
    <div className={classes.Category_menu}>
      {categoryData.map(({ id, ...otherSectionProps }) => (
        <CategoryItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  categoryData: state.category.section,
});

export default connect(mapStateToProps)(Category);

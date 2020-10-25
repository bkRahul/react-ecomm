import React from 'react';
import { connect } from 'react-redux';
import classes from './Collection.module.scss';
import { selectCollection } from '../../redux/store/shop/shop.selectors';
import Product from '../Product/Product';

const Collection = ({ collection }) => {
  const { items, title } = collection;
  return (
    <div className={classes.Collection}>
      <h2 className={classes.Title}>{title}</h2>
      <div className={classes.Items}>
        {items.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

//passing props with state
const mapStateToProps = (state, ownProps) => ({
  //selectCollection is a function that return another function
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);

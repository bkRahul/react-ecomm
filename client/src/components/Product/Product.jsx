import React from 'react';
import { connect } from 'react-redux';

import classes from './Product.module.scss';
import { addToCart } from '../../redux/store/cart/cart.actions';
import { Button } from '../../ui/Button/Button';

const Product = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className={classes.Product}>
      <div
        className={classes.Image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <Button btnType="ProductBtn" clicked={() => addToCart(item)}>
          add to cart
        </Button>
      </div>
      <div className={classes.CollectionFooter}>
        <span className={classes.Name}>{name}</span>
        <span className={classes.Price}>{price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(Product);

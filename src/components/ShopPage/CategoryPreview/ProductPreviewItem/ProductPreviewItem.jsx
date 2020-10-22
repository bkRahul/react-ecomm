import React from 'react';
import { connect } from 'react-redux';
import classes from './ProductPreviewItem.module.scss';
import { Button } from '../../../../ui/Button/Button';
import { addToCart } from '../../../../redux/store/cart/cart.actions';

const ProductPreviewItem = ({ item, addToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className={classes.ProductPreviewItem}>
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

export default connect(null, mapDispatchToProps)(ProductPreviewItem);

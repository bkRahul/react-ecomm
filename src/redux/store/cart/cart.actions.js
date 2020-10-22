import { cartActionTypes } from './cart.actionTypes';

export const toggleCartPreview = () => {
  return {
    type: cartActionTypes.TOGGLE_CART_PREVIEW,
  };
};

export const addToCart = item => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = () => {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
  };
};

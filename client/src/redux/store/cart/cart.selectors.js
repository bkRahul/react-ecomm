import { createSelector } from 'reselect';

//gets cart state from state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  //refers selectCart and then passes state to it
  [selectCart],
  //gets items from selectCart
  cart => cart.cartItems
);

export const selectCartPreview = createSelector(
  [selectCart],
  cart => cart.cartPreview
);

export const selectCartItemsCount = createSelector(
  //refers selectCartItems for cartItems
  [selectCartItems],
  //gets cartItems count from selectCartItems
  cartItems =>
    cartItems.reduce(
      (accumulatedQty, cartItem) => accumulatedQty + cartItem.qty,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedPrice, cartItem) =>
        accumulatedPrice + cartItem.qty * cartItem.price,
      0
    )
);

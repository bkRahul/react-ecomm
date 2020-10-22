export const addItemToCartUtil = (cart, prod) => {
  const cartItemExists = cart.find(cartItem => cartItem.id === prod.id);
  if (cartItemExists) {
    return cart.map(cartItem =>
      cartItem.id === prod.id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }
  return [...cart, { ...prod, qty: 1 }];
};

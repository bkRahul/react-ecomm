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

export const removeItemFromCartUtil = (cart, prod) => {
  return cart.filter(cartItem => cartItem.id !== prod.id);
};

export const decreaseItemQty = (cart, prod) => {
  const cartItemExists = cart.find(cartItem => cartItem.id === prod.id);
  if (cartItemExists.qty !== 1) {
    return cart.map(cartItem =>
      cartItem.id === prod.id
        ? { ...cartItem, qty: cartItem.qty - 1 }
        : cartItem
    );
  }
  return removeItemFromCartUtil(cart, prod);
};

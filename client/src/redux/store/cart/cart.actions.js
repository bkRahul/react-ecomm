import { cartActionTypes } from './cart.actionTypes'

export const toggleCartPreview = () => {
	return {
		type: cartActionTypes.TOGGLE_CART_PREVIEW,
	}
}

export const addToCart = item => {
	return {
		type: cartActionTypes.ADD_TO_CART,
		payload: item,
	}
}

export const removeFromCart = item => {
	return {
		type: cartActionTypes.REMOVE_FROM_CART,
		payload: item,
	}
}

export const clearCartItems = () => {
	return {
		type: cartActionTypes.CLEAR_CART,
	}
}

export const decreaseItemQty = item => {
	return {
		type: cartActionTypes.DECREASE_ITEM_QTY,
		payload: item,
	}
}

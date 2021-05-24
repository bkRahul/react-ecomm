import {
	addItemToCartUtil,
	decreaseItemQty,
	removeItemFromCartUtil,
} from '../../../utils/cart'
import { cartActionTypes } from './cart.actionTypes'

const INITIAL_STATE = {
	cartPreview: false,
	cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionTypes.TOGGLE_CART_PREVIEW:
			return {
				...state,
				cartPreview: !state.cartPreview,
			}

		case cartActionTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: addItemToCartUtil(state.cartItems, action.payload),
			}

		case cartActionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: removeItemFromCartUtil(state.cartItems, action.payload),
			}

		case cartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			}

		case cartActionTypes.DECREASE_ITEM_QTY:
			return {
				...state,
				cartItems: decreaseItemQty(state.cartItems, action.payload),
			}

		default:
			return state
	}
}

export default cartReducer

import { cartActionTypes } from '../../redux/store/cart/cart.actionTypes'
import cartReducer from '../../redux/store/cart/cart.reducer'

describe('cart reducer', () => {
	//should return the initial state when state is undefined
	it('should return the intial state ', () => {
		expect(cartReducer(undefined, {})).toEqual({
			cartPreview: false,
			cartItems: [],
		})
	})

	it('should toggle the cart preview when TOGGLE_CART_PREVIEW is dispatched ', () => {
		const action = { type: cartActionTypes.TOGGLE_CART_PREVIEW }
		const INITIAL_STATE = {
			cartPreview: false,
			cartItems: [],
		}
		expect(cartReducer(INITIAL_STATE, action)).toEqual({
			cartPreview: true,
			cartItems: [],
		})
	})

	it('should add item to cart when ADD_TO_CART is dispatched with payload', () => {
		const action = {
			type: cartActionTypes.ADD_TO_CART,
			payload: {
				id: 4,
				name: 'Grey Brim',
				imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
				price: 25,
				qty: 1,
			},
		}
		const INITIAL_STATE = {
			cartPreview: false,
			cartItems: [],
		}

		expect(cartReducer(INITIAL_STATE, action)).toEqual({
			cartPreview: false,
			cartItems: [
				{
					id: 4,
					name: 'Grey Brim',
					imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
					price: 25,
					qty: 1,
				},
			],
		})
	})

	it('should remove item from cart when REMOVE_FROM_CART is dispatched with payload', () => {
		const action = {
			type: cartActionTypes.REMOVE_FROM_CART,
			payload: {
				id: 4,
				name: 'Grey Brim',
				imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
				price: 25,
				qty: 1,
			},
		}
		const INITIAL_STATE = {
			cartPreview: false,
			cartItems: [
				{
					id: 4,
					name: 'Grey Brim',
					imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
					price: 25,
					qty: 1,
				},
			],
		}
		expect(cartReducer(INITIAL_STATE, action)).toEqual({
			cartPreview: false,
			cartItems: [],
		})
	})

	it('should clear the cart when CLEAR_CART is dispatched ', () => {
		const action = { type: cartActionTypes.CLEAR_CART }
		const INITIAL_STATE = {
			cartPreview: false,
			cartItems: [
				{
					id: 4,
					name: 'Grey Brim',
					imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
					price: 25,
					qty: 1,
				},
			],
		}
		expect(cartReducer(INITIAL_STATE, action)).toEqual({
			cartPreview: false,
			cartItems: [],
		})
	})

	it('should decrease item quantity from cart when DECREASE_ITEM_QTY is dispatched with payload', () => {
		const action = {
			type: cartActionTypes.DECREASE_ITEM_QTY,
			payload: {
				id: 4,
				name: 'Grey Brim',
				imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
				price: 25,
				qty: 1,
			},
		}
		const INITIAL_STATE = {
			cartPreview: false,
			cartItems: [
				{
					id: 4,
					name: 'Grey Brim',
					imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
					price: 25,
					qty: 2,
				},
			],
		}
		expect(cartReducer(INITIAL_STATE, action)).toEqual({
			cartPreview: false,
			cartItems: [
				{
					id: 4,
					name: 'Grey Brim',
					imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
					price: 25,
					qty: 1,
				},
			],
		})
	})
})

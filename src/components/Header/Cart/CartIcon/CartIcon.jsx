import React, { useContext } from 'react'
import { connect } from 'react-redux'
import cartContext from '../../../../context/cart'
import { selectCartItemsCount } from '../../../../redux/store/cart/cart.selectors'
import { Cart, ItemCount, BagIcon } from './CartIcon.styles'

const CartIcon = ({ itemCount }) => {
	const { toggleCartPreview } = useContext(cartContext)
	return (
		<Cart onClick={toggleCartPreview}>
			<BagIcon />
			<ItemCount>{itemCount}</ItemCount>
		</Cart>
	)
}

const mapStateToProps = state => ({
	//pass whole state to the selector
	itemCount: selectCartItemsCount(state),
})

export default connect(mapStateToProps)(CartIcon)

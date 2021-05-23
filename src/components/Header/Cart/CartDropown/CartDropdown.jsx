import React from 'react'
import { withRouter } from 'react-router-dom'
import classes from './CartDropdown.module.scss'
import { Button } from '../../../../ui/Button/Button'
import { CartDropdownItem } from '../CartDropdownItem/CartDropdownItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../../../redux/store/cart/cart.selectors'
import { toggleCartPreview } from '../../../../redux/store/cart/cart.actions'
import { createStructuredSelector } from 'reselect'

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className={classes.CartDropdown}>
			<div className={classes.CartItems}>
				{cartItems.length > 0 ? (
					cartItems.map(item => <CartDropdownItem key={item.id} item={item} />)
				) : (
					<h1 style={{ textAlign: 'center', marginTop: '100px' }}>
						Cart is Empty
					</h1>
				)}
			</div>
			<Button
				clicked={() => {
					history.push('/checkout')
					dispatch(toggleCartPreview())
				}}
			>
				Proceed to Checkout
			</Button>
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

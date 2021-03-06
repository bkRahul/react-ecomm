import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/svg/crown.svg'
import { selectCartPreview } from '../../redux/store/cart/cart.selectors'
import { signOutStart } from '../../redux/store/user/user.actions'
import { selectCurrentUser } from '../../redux/store/user/user.selectors'
import CartDropdown from './Cart/CartDropown/CartDropdown'
import CartIcon from './Cart/CartIcon/CartIcon'
import classes from './Header.module.scss'

const Header = ({ isAuth, isVisible, signOut }) => {
	return (
		<div className={classes.Header}>
			<NavLink to='/' className={classes.LogoContainer}>
				<Logo className={classes.Logo} />
			</NavLink>
			<div className={classes.Options}>
				<NavLink to='/shop' className={classes.Option}>
					SHOP
				</NavLink>
				<NavLink to='/contact' className={classes.Option}>
					CONTACT
				</NavLink>
				{isAuth ? (
					<div className={classes.Option} onClick={signOut}>
						LOG OUT
					</div>
				) : (
					<NavLink to='/auth' className={classes.Option}>
						LOG IN
					</NavLink>
				)}
				<CartIcon />
			</div>
			{isVisible && <CartDropdown />}
		</div>
	)
}

const mapStateToProps = state => ({
	isAuth: selectCurrentUser(state),
	isVisible: selectCartPreview(state),
})

const mapDispatchToProps = dispatch => ({
	signOut: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

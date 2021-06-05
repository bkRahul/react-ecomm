import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/svg/crown.svg'
import CartContext from '../../context/cart'
import userContext from '../../context/user'
import { auth } from '../../utils/firebase'
import CartDropdown from './Cart/CartDropown/CartDropdown'
import CartIcon from './Cart/CartIcon/CartIcon'
import classes from './Header.module.scss'

const Header = () => {
	const currentUser = useContext(userContext)
	const [cartPreview, setCartPreview] = useState(false)

	const toggleCartPreview = () => setCartPreview(!cartPreview)

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
				{currentUser ? (
					<div className={classes.Option} onClick={() => auth.signOut()}>
						LOG OUT
					</div>
				) : (
					<NavLink to='/auth' className={classes.Option}>
						LOG IN
					</NavLink>
				)}
				<CartContext.Provider value={{ cartPreview, toggleCartPreview }}>
					<CartIcon />
				</CartContext.Provider>
			</div>
			{cartPreview && <CartDropdown />}
		</div>
	)
}

export default Header

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import { selectCartPreview } from '../../redux/store/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/store/user/user.selectors';
import { auth } from '../../utils/firebase';
import CartDropdown from './Cart/CartDropown/CartDropdown';
import CartIcon from './Cart/CartIcon/CartIcon';
import classes from './Header.module.scss';

const Header = ({ isAuth, isVisible }) => {
  return (
    <div className={classes.Header}>
      <NavLink to="/" className={classes.LogoContainer}>
        <Logo className={classes.Logo} />
      </NavLink>
      <div className={classes.Options}>
        <NavLink to="/shop" className={classes.Option}>
          SHOP
        </NavLink>
        <NavLink to="/contact" className={classes.Option}>
          CONTACT
        </NavLink>
        {isAuth ? (
          <div className={classes.Option} onClick={() => auth.signOut()}>
            LOG OUT
          </div>
        ) : (
          <NavLink to="/auth" className={classes.Option}>
            LOG IN
          </NavLink>
        )}
        <CartIcon />
      </div>
      {isVisible && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: selectCurrentUser(state),
  isVisible: selectCartPreview(state),
});

export default connect(mapStateToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import { auth } from '../../utils/firebase';
import classes from './Header.module.scss';

const Header = ({ isAuth }) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ isAuth: state.user.currentUser });

export default connect(mapStateToProps)(Header);

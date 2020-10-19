import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';
import { auth } from '../../utils/firebase';
import classes from './Header.module.scss';

export const Header = ({ isAuth }) => {
  return (
    <div className={classes.Header}>
      <NavLink to="/">
        <Logo className={classes.Logo} />
      </NavLink>
      <NavLink to="/shop" className={classes.option}>
        SHOP
      </NavLink>
      <NavLink to="/contact" className={classes.option}>
        CONTACT
      </NavLink>
      {!isAuth ? (
        <NavLink to="/auth" className={classes.option}>
          LOG IN
        </NavLink>
      ) : (
        <div className={classes.option} onClick={() => auth.signOut()}>
          LOG OUT
        </div>
      )}
    </div>
  );
};

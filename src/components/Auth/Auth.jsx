import React from 'react';
import classes from './Auth.module.scss';
import Login from './Login/Login';
import { SignUp } from './SignUp/SignUp';

export const Auth = () => {
  return (
    <div className={classes.Auth}>
      <Login />
      <SignUp />
    </div>
  );
};

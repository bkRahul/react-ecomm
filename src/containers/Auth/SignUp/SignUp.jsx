import classes from './SignUp.module.scss';
import React, { useState } from 'react';
import Input from '../../../ui/Input/Input';
import { Button } from '../../../ui/Button/Button';
import { auth, createUserProfileDocument } from '../../../utils/firebase';

export const SignUp = () => {
  const [signUp, setSignUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function onChangeHandler(e) {
    const { name, value } = e.target;
    const updatedAuth = {
      ...signUp,
      [name]: value,
    };
    setSignUp(updatedAuth);
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = signUp;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      //create new user with email and password
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //create user document reference
      await createUserProfileDocument(user, { displayName });
      //clear form after submit
      setSignUp({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.SignUp}>
      <h2>I do not have an account</h2>
      <span>Sign Up with a email and password</span>
      <form onSubmit={onSubmitHandler}>
        <Input
          name="displayName"
          type="text"
          elementType="input"
          label="Name"
          value={signUp.displayName}
          changed={onChangeHandler}
          required
        />
        <Input
          name="email"
          type="email"
          elementType="input"
          label="Email"
          value={signUp.email}
          changed={onChangeHandler}
          required
        />
        <Input
          name="password"
          type="password"
          elementType="input"
          label="Password"
          value={signUp.password}
          changed={onChangeHandler}
          required
        />
        <Input
          name="confirmPassword"
          type="password"
          elementType="input"
          label="Confirm Password"
          value={signUp.confirmPassword}
          changed={onChangeHandler}
          required
        />
        <div className={classes.ButtonGroup}>
          <Button type="submit">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

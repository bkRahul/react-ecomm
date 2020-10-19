import React, { Component } from 'react';
import classes from './Login.module.scss';
import Input from '../../../ui/Input/Input';
import { Button } from '../../../ui/Button/Button';
import { signInWithGoogle } from '../../../utils/firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={classes.Login}>
        <h2>I already have an account</h2>
        <span>Login with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <Input
            name="email"
            type="email"
            elementType="input"
            label="Email"
            value={this.state.email}
            changed={this.onChangeHandler}
            required
          />
          <Input
            name="password"
            type="password"
            elementType="input"
            label="Password"
            value={this.state.password}
            changed={this.onChangeHandler}
            required
          />
          <div className={classes.ButtonGroup}>
            <Button type="submit">Login</Button>
            <Button clicked={signInWithGoogle} btnType="GoogleBtn">
              Login with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

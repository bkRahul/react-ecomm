import React, { Component } from 'react'
import classes from './Login.module.scss'
import Input from '../../../ui/Input/Input'
import { Button } from '../../../ui/Button/Button'
import { connect } from 'react-redux'
import {
	emailSignInStart,
	googleSignInStart,
} from '../../../redux/store/user/user.actions'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
		}
		this.onSubmitHandler = this.onSubmitHandler.bind(this)
		this.onChangeHandler = this.onChangeHandler.bind(this)
	}

	onChangeHandler(e) {
		const { name, value } = e.target
		this.setState({
			[name]: value,
		})
	}

	onSubmitHandler(e) {
		e.preventDefault()
		const { email, password } = this.state
		const { emailSignInStart } = this.props
		emailSignInStart(email, password)
	}

	render() {
		const { googleSignInStart } = this.props
		return (
			<div className={classes.Login}>
				<h2>I already have an account</h2>
				<span>Login with your email and password</span>
				<form onSubmit={this.onSubmitHandler}>
					<Input
						name='email'
						type='email'
						elementType='input'
						label='Email'
						value={this.state.email}
						changed={this.onChangeHandler}
						required
					/>
					<Input
						name='password'
						type='password'
						elementType='input'
						label='Password'
						value={this.state.password}
						changed={this.onChangeHandler}
						required
					/>
					<div className={classes.ButtonGroup}>
						<Button type='submit'>Login</Button>
						<Button
							type='button'
							clicked={googleSignInStart}
							btnType='GoogleBtn'
						>
							Login with Google
						</Button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(Login)

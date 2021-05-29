import React, { useState } from 'react'
import { connect } from 'react-redux'
import classes from './SignUp.module.scss'
import Input from '../../../ui/Input/Input'
import { Button } from '../../../ui/Button/Button'
import { signUpStart } from '../../../redux/store/user/user.actions'

const SignUp = ({ signUp }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	function onChangeHandler(e) {
		const { name, value } = e.target
		const updatedAuth = {
			...userCredentials,
			[name]: value,
		}
		setUserCredentials(updatedAuth)
	}

	async function onSubmitHandler(e) {
		e.preventDefault()
		const { password, confirmPassword } = userCredentials
		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}
		try {
			signUp(userCredentials)
			//create new user with email and password
			// const { user } = await auth.createUserWithEmailAndPassword(
			//   email,
			//   password
			// );
			// //create user document reference
			// await createUserProfileDocument(user, { displayName });
			// //clear form after submit
			// userCredentials({
			//   displayName: '',
			//   email: '',
			//   password: '',
			//   confirmPassword: '',
			// });
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className={classes.SignUp}>
			<h2>I do not have an account</h2>
			<span>Sign Up with a email and password</span>
			<form onSubmit={onSubmitHandler}>
				<Input
					name='displayName'
					type='text'
					elementType='input'
					label='Name'
					value={userCredentials.displayName}
					changed={onChangeHandler}
					required
				/>
				<Input
					name='email'
					type='email'
					elementType='input'
					label='Email'
					value={userCredentials.email}
					changed={onChangeHandler}
					required
				/>
				<Input
					name='password'
					type='password'
					elementType='input'
					label='Password'
					value={userCredentials.password}
					changed={onChangeHandler}
					required
				/>
				<Input
					name='confirmPassword'
					type='password'
					elementType='input'
					label='Confirm Password'
					value={userCredentials.confirmPassword}
					changed={onChangeHandler}
					required
				/>
				<div className={classes.ButtonGroup}>
					<Button type='submit'>Sign Up</Button>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	signUp: userCredentials => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)

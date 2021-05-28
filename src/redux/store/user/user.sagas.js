import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
	auth,
	createUserProfileDocument,
	getCurrentUser,
	googleProvider,
} from '../../../utils/firebase'
import {
	signInFailure,
	signInSuccess,
	signOutFailure,
	signOutSuccess,
	signUpFailure,
	signUpSuccess,
} from './user.actions'
import { userActionTypes } from './user.actionTypes'

function* getSnapShotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData,
		)
		const userSnapshot = yield userRef.get()
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
	} catch (error) {
		yield put(signInFailure(error))
	}
}

//google signin saga
function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider)
		yield getSnapShotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onGoogleSignStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

//email signin saga
function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password)
		yield getSnapShotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onEmailSignStart() {
	yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

//user sign out
function* signOut() {
	try {
		yield auth.signOut()
		yield put(signOutSuccess())
	} catch (error) {
		yield put(signOutFailure(error))
	}
}

export function* onSignOutStart() {
	yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

//user signup saga
function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password)
		yield put(signUpSuccess({ user, additionalData: { displayName } }))
	} catch (error) {
		yield put(signUpFailure(error))
	}
}

export function* onSignUpStart() {
	yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
}

//signin after signup saga
function* signInAftersignUp({ payload: { user, additionalData } }) {
	yield getSnapShotFromUserAuth(user, additionalData)
}

export function* onSignUpSuccess() {
	yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAftersignUp)
}

//persist user login saga

function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser()
		if (!userAuth) return
		yield getSnapShotFromUserAuth(userAuth)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onCheckUserSession() {
	yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

//combine signin sagas
export function* userSagas() {
	yield all([
		call(onGoogleSignStart),
		call(onEmailSignStart),
		call(onSignOutStart),
		call(isUserAuthenticated),
		call(onSignUpStart),
		call(onSignUpSuccess),
	])
}

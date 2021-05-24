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
} from './user.actions'
import { userActionTypes } from './user.actionTypes'

function* getSnapShotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth)
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
	])
}

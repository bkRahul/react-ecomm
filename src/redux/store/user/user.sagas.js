import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
	auth,
	createUserProfileDocument,
	googleProvider,
} from '../../../utils/firebase'
import { signInFailure, signInSuccess } from './user.actions'
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

//combine signin sagas
export function* userSagas() {
	yield all([call(onGoogleSignStart), call(onEmailSignStart)])
}

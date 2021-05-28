import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { userActionTypes } from '../user/user.actionTypes'
import { clearCartItems } from './cart.actions'

function* clearCart() {
	yield put(clearCartItems())
}

function* onSignOutSuccess() {
	yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCart)
}

export function* cartSagas() {
	yield all([call(onSignOutSuccess)])
}

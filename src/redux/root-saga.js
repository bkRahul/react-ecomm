import { all, call } from '@redux-saga/core/effects'
import { cartSagas } from './store/cart/cart.sagas'
import { shopSagas } from './store/shop/shop.sagas'
import { userSagas } from './store/user/user.sagas'

export default function* rootSaga() {
	yield all([call(shopSagas), call(userSagas), call(cartSagas)])
}

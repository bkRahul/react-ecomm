import { all, call } from '@redux-saga/core/effects'
import { fetchCollectionsStart } from './store/shop/shop.sagas'
import { userSagas } from './store/user/user.sagas'

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas)])
}

import { all, call, put, takeLatest } from 'redux-saga/effects'
import { shopActionTypes } from './shop.actionTypes'
import { convertSnapshotCollection, firestore } from '../../../utils/firebase'
import {
	fetchCollectionsFailure,
	fetchCollectionsSuccess,
} from './shop.actions'

function* fetchCollectionsAsync() {
	try {
		//get collection reference from collection at specified path
		const collectionRef = firestore.collection('collections')
		//yield is similar to async await so we get the resolved value of promise
		const snapshot = yield collectionRef.get()
		const collectionObject = yield call(convertSnapshotCollection, snapshot)
		yield put(fetchCollectionsSuccess(collectionObject))
	} catch (error) {
		yield put(fetchCollectionsFailure(error))
	}
}

function* fetchCollectionsStart() {
	yield takeLatest(
		shopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync,
	)
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)])
}

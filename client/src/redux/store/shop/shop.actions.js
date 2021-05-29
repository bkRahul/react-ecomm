import { shopActionTypes } from './shop.actionTypes'

export const fetchCollectionsStart = () => {
	return {
		type: shopActionTypes.FETCH_COLLECTIONS_START,
	}
}

export const fetchCollectionsSuccess = collections => {
	return {
		type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
		payload: collections,
	}
}

export const fetchCollectionsFailure = error => {
	return {
		type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
		error: error,
	}
}

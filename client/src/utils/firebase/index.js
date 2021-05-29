import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
	apiKey: 'AIzaSyCY_euszBDXqAaLBtAyIB-1f38W9sS9IzM',
	authDomain: 'ecomm-react-91a92.firebaseapp.com',
	databaseURL: 'https://ecomm-react-91a92.firebaseio.com',
	projectId: 'ecomm-react-91a92',
	storageBucket: 'ecomm-react-91a92.appspot.com',
	messagingSenderId: '1028425448830',
	appId: '1:1028425448830:web:4bb8d986d2e95afffd472f',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return
	//get query reference object
	const userRef = firestore.doc(`users/${userAuth.uid}`)
	//get user snapshot
	const snapShot = await userRef.get()

	//if no user record exist
	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			})
		} catch (err) {
			console.log('error creating user', err.message)
		}
	}
	return userRef
}

export const convertSnapshotCollection = collections => {
	return collections.docs
		.map(doc => {
			const { title, items } = doc.data()

			return {
				id: doc.id,
				routeName: encodeURI(title.toLowerCase()),
				title,
				items,
			}
		})
		.reduce((accumulator, collection) => {
			accumulator[collection.title.toLowerCase()] = collection
			return accumulator
		}, {})
}

//create a ref object
export const addCollectionsAndDocs = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey)
	console.log(collectionRef)
	//create a firestore batch
	const batch = firestore.batch()
	console.log(' objectsToAdd =....', objectsToAdd)
	objectsToAdd.forEach(obj => {
		//get document reference at specified path
		const newDocRef = collectionRef.doc()
		//batch the document reference value
		batch.set(newDocRef, obj)
		console.log(newDocRef)
	})
	//fire batch request
	await batch.commit()
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe()
			resolve(userAuth)
		}, reject)
	})
}

//provide google authentication trigger and google sign in prompt
export const googleProvider =
	new firebase.auth.GoogleAuthProvider().setCustomParameters({
		prompt: 'select_account',
	})

export default firebase

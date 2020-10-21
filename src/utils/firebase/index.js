import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCY_euszBDXqAaLBtAyIB-1f38W9sS9IzM',
  authDomain: 'ecomm-react-91a92.firebaseapp.com',
  databaseURL: 'https://ecomm-react-91a92.firebaseio.com',
  projectId: 'ecomm-react-91a92',
  storageBucket: 'ecomm-react-91a92.appspot.com',
  messagingSenderId: '1028425448830',
  appId: '1:1028425448830:web:4bb8d986d2e95afffd472f',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log('userAuth', userAuth);
  if (!userAuth) return;
  //get query reference object
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  console.log('userRef', userRef);
  //get user snapshot
  const snapShot = await userRef.get();
  console.log('snapShot', snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//provide google authentication
const provider = new firebase.auth.GoogleAuthProvider();
//trigger a google sign in prompt
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

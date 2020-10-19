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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//provide google authentication
const provider = new firebase.auth.GoogleAuthProvider();
//trigger a google sign in prompt
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

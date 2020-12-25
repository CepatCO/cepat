import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCIvySvwUlfvGX1q38TVy2WxfdFBTllAc8',
  authDomain: 'cepat-co.firebaseapp.com',
  databaseURL: 'https://cepat-co.firebaseio.com',
  projectId: 'cepat-co',
  storageBucket: 'cepat-co.appspot.com',
  messagingSenderId: '269743435600',
  appId: '1:269743435600:web:0e4580789d82ca09b78655',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { storage, db, auth, timestamp };

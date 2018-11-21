import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAhhpJSgV7x-pSI3c5gCtgvndrkTvrS_wI",
    authDomain: "authentication-b0cef.firebaseapp.com",
    databaseURL: "https://authentication-b0cef.firebaseio.com",
    projectId: "authentication-b0cef",
    storageBucket: "authentication-b0cef.appspot.com",
    messagingSenderId: "448335017289"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  auth,
  db
};
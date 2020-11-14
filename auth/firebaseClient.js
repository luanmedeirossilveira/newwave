import * as firebase from 'firebase/app';
import 'firebase/auth';

if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyB4rndvjNIiLz0Kfu2sLh8e9rJKksyk20E",
    authDomain: "newwavestudy-137d3.firebaseapp.com",
    databaseURL: "https://newwavestudy-137d3.firebaseio.com",
    projectId: "newwavestudy-137d3",
    storageBucket: "newwavestudy-137d3.appspot.com",
    messagingSenderId: "276662642261",
    appId: "1:276662642261:web:d57d9f7e6d3a68a0a916dc",
  });
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
}

export { firebase };
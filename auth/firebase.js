import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBO_9ND1YgPBbsh_eKSqeb5xddT21Jq9Q8",
    authDomain: "newwavestudy.firebaseapp.com",
    databaseURL: "https://newwavestudy.firebaseio.com",
    projectId: "newwavestudy",
    storageBucket: "newwavestudy.appspot.com",
    messagingSenderId: "686767338110",
    appId: "1:686767338110:web:f980c8b785e82ef0bc1e2f"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
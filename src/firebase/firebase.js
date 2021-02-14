import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYnrJfoxtKWgoWG_tq878kOuKxdvuGWnY",
  authDomain: "videomania-d9ea3.firebaseapp.com",
  projectId: "videomania-d9ea3",
  storageBucket: "videomania-d9ea3.appspot.com",
  messagingSenderId: "437242409618",
  appId: "1:437242409618:web:b9441a2b2e1e1ecb6a6c4b",
  measurementId: "G-C91TLYNT3Q"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
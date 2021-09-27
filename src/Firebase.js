import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyCCLH004JE0yXNeec58lvbsOX0RYe55e9E",
  authDomain: "crud-vuejs-9d6d6.firebaseapp.com",
  databaseURL: "https://crud-vuejs-9d6d6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-vuejs-9d6d6",
  storageBucket: "crud-vuejs-9d6d6.appspot.com",
  messagingSenderId: "990531043327",
  appId: "1:990531043327:web:ab8881a14fb7522dcd71ca",
  measurementId: "G-N88DEX27RM"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
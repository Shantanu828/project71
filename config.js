import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCQkZTcBBpplL9RR74hEzRjv3y1hR3j38M",
    authDomain: "project71-e580b.firebaseapp.com",
    projectId: "project71-e580b",
    storageBucket: "project71-e580b.appspot.com",
    messagingSenderId: "502701290823",
    appId: "1:502701290823:web:ea466c90d84c3f111e8862"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

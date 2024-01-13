import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDT6-zrQaeT44EjDFPHM1DH29yCV2JzfS4",
    authDomain: "votingapp-2ff1e.firebaseapp.com",
    databaseURL: "https://votingapp-2ff1e-default-rtdb.firebaseio.com",
    projectId: "votingapp-2ff1e",
    storageBucket: "votingapp-2ff1e.appspot.com",
    messagingSenderId: "620689449407",
    appId: "1:620689449407:web:64ecbf3dcf7ed574d8410a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
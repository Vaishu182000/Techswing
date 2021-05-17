import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDDsJfclB2bG0rAeTxKYbNMu8Lbq0obPvo",
    authDomain: "techswing-ef547.firebaseapp.com",
    projectId: "techswing-ef547",
    storageBucket: "techswing-ef547.appspot.com",
    messagingSenderId: "1290968750",
    appId: "1:1290968750:web:368b1b0df7475ef4c5973f",
    measurementId: "G-B70JHY9R7Q"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  firebase.analytics();
  export default firebaseApp;
import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBV0zT6dfvk79JsUiDyxl9d5dPXo0esekA",
    authDomain: "codeit-resume.firebaseapp.com",
    projectId: "codeit-resume",
    storageBucket: "codeit-resume.appspot.com",
    messagingSenderId: "513387431218",
    appId: "1:513387431218:web:fa0e9b0f29c8e5caef032b",
    measurementId: "G-TE2968XB58"
  };

firebase.initializeApp(firebaseConfig);
export default firebase
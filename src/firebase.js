import firebase from 'firebase/app';
import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
//     measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };


firebase.initializeApp({
    apiKey: "AIzaSyD5OLkhLzavFqRO4szszWuyNacYP2wJkp0",
    authDomain: "crud-app-ac507.firebaseapp.com",
    projectId: "crud-app-ac507",
    storageBucket: "crud-app-ac507.appspot.com",
    messagingSenderId: "411254473521",
    appId: "1:411254473521:web:ec1fca62076fa303da6610"
  });
  
const db = firebase.firestore();

export default db;
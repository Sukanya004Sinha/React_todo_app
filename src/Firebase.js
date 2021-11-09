
import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvyuSjH-kbmcKMrykrvUwxAzq5N3cWs1w",
  authDomain: "todo-app-6daef.firebaseapp.com",
  projectId: "todo-app-6daef",
  storageBucket: "todo-app-6daef.appspot.com",
  messagingSenderId: "633720802892",
  appId: "1:633720802892:web:58bb8748a0a834d8c46ee9"
});

const db= firebaseApp.firestore();
  export default  db;

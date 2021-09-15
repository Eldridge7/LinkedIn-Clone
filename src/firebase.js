import firebase from "firebase" ;

const firebaseConfig = {
    apiKey: "AIzaSyBhMBYa6kM_NKDizGnuczYtth_Z7fgtLds",
    authDomain: "linkedin-clone-yt-cf29a.firebaseapp.com",
    projectId: "linkedin-clone-yt-cf29a",
    storageBucket: "linkedin-clone-yt-cf29a.appspot.com",
    messagingSenderId: "288542640654",
    appId: "1:288542640654:web:28ebc6ce52886672fb4a5f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth}



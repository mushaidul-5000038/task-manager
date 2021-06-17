import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAaOB8O7nUHOGBbJlG6IA3t1OK4x1035bw",
    authDomain: "task-hub-1c1eb.firebaseapp.com",
    projectId: "task-hub-1c1eb",
    storageBucket: "task-hub-1c1eb.appspot.com",
    messagingSenderId: "540165619984",
    appId: "1:540165619984:web:c23ef7cc6352502e16a595"
  };
  // Initialize Firebase
  const firebaseApp  =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth};
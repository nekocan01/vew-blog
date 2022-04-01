import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8JaU6QAl8hH_lmscBswkFanItIosVDdQ",
    authDomain: "test-vue-87957.firebaseapp.com",
    projectId: "test-vue-87957",
    storageBucket: "test-vue-87957.appspot.com",
    messagingSenderId: "518000397248",
    appId: "1:518000397248:web:6e713715dd15dc43c11625"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const firebaseAuth = firebase.auth();
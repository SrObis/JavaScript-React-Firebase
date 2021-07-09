import firebase from "firebase";
import 'firebase/auth' 
//servicio de autentificacion copiado de firebase
//cada proyecto tiene su propio
const firebaseConfig = {
    apiKey: "AIzaSyDAk2DnksbTXwec9HmM6avgasP6aTBvlzc",
    authDomain: "javascript-react-firebase.firebaseapp.com",
    projectId: "javascript-react-firebase",
    storageBucket: "javascript-react-firebase.appspot.com",
    messagingSenderId: "450164342377",
    appId: "1:450164342377:web:df8c0bd6a6aa7fffffecf8",
    measurementId: "G-Y4ZTVBMQ01"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth()//dentro ad auth tenemos todo el objeto de firebase

export {auth}
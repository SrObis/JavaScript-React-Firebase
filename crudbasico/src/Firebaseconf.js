import firebase from "firebase"
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDAk2DnksbTXwec9HmM6avgasP6aTBvlzc",
  authDomain: "javascript-react-firebase.firebaseapp.com",
  projectId: "javascript-react-firebase",
  storageBucket: "javascript-react-firebase.appspot.com",
  messagingSenderId: "450164342377",
  appId: "1:450164342377:web:df8c0bd6a6aa7fffffecf8",
  measurementId: "G-Y4ZTVBMQ01"
}
  // Initialize Firebase
const fireb =  firebase.initializeApp(firebaseConfig);
const store =  firebase.firestore()

export { store }
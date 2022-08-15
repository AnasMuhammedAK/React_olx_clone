import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAsNSunp6jlXns18NefIrlOcks9ycpn5eA",
    authDomain: "olx-react-6ff33.firebaseapp.com",
    projectId: "olx-react-6ff33",
    storageBucket: "olx-react-6ff33.appspot.com",
    messagingSenderId: "650084711486",
    appId: "1:650084711486:web:5604a79b652d1c47cfe56f",
    measurementId: "G-MFVZNZRDKP"
  };
  // const firebaseConfig = {
//   apiKey: "AIzaSyDBcN4bWVJQ5mbAfSAYNbckopIEXOcxCgY",
//   authDomain: "olx---clone.firebaseapp.com",
//   projectId: "olx---clone",
//   storageBucket: "olx---clone.appspot.com",
//   messagingSenderId: "1065616203213",
//   appId: "1:1065616203213:web:999bd97b1bc9e3e1bb7884",
//   measurementId: "G-5S9W4ZP95M"
// };


export default firebase.initializeApp(firebaseConfig);

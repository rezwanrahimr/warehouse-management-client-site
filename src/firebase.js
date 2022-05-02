// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjiXm7u-wh2ijOXlFZRbFFykhck2k2Zvg",
  authDomain: "oracle-inventory.firebaseapp.com",
  projectId: "oracle-inventory",
  storageBucket: "oracle-inventory.appspot.com",
  messagingSenderId: "502556506783",
  appId: "1:502556506783:web:c09132864dbed67cf9c0aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
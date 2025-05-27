// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPPEsBgSJJp9X8NaaVuuWGTjDL6i4fu0w",
  authDomain: "shashank-khose-vtraves-fdtask.firebaseapp.com",
  projectId: "shashank-khose-vtraves-fdtask",
  storageBucket: "shashank-khose-vtraves-fdtask.appspot.com",
  messagingSenderId: "1057357451241",
  appId: "1:1057357451241:web:038770c1cf65311fb6c578",
  measurementId: "G-43KZ6RRE9P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

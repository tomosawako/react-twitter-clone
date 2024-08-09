import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzVGavLlyjdRlYsDSNOsqRx8rYBkwF6ik",
  authDomain: "twitter-clone-udemy-c4dc4.firebaseapp.com",
  projectId: "twitter-clone-udemy-c4dc4",
  storageBucket: "twitter-clone-udemy-c4dc4.appspot.com",
  messagingSenderId: "705812975459",
  appId: "1:705812975459:web:7edf2c6675be43aa424d56"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
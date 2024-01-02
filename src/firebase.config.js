import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD5zodtzQKAD7NCTBdjTlcgb5ELhA5XUHw",
  authDomain: "cravingsapp-16fa6.firebaseapp.com",
  databaseURL: "https://cravingsapp-16fa6-default-rtdb.firebaseio.com",
  projectId: "cravingsapp-16fa6",
  storageBucket: "cravingsapp-16fa6.appspot.com",
  messagingSenderId: "809611932437",
  appId: "1:809611932437:web:0d4a2daca02fee3e8fef1c"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };
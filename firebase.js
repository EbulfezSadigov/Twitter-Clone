import { initializeApp, getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";  

const firebaseConfig = {
  apiKey: "AIzaSyBr4o_MHkkYpR6oRl63BIIkO-YNpbQR300",
  authDomain: "twitter-auth-121ac.firebaseapp.com",
  projectId: "twitter-auth-121ac",
  storageBucket: "twitter-auth-121ac.appspot.com",
  messagingSenderId: "895406685236",
  appId: "1:895406685236:web:1d6309e69006a156d41e61"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
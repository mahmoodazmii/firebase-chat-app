import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw5lCuS-8GxECWEb7pd9xHgTELzGQ199c",
  authDomain: "chat-app01-3ba6d.firebaseapp.com",
  projectId: "chat-app01-3ba6d",
  storageBucket: "chat-app01-3ba6d.appspot.com",
  messagingSenderId: "680785721030",
  appId: "1:680785721030:web:444f958420e1bc5a48c9c7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

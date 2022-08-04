//import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_KEY}`,
  authDomain: "todo-crud-58c62.firebaseapp.com",
  projectId: "todo-crud-58c62",
  storageBucket: "todo-crud-58c62.appspot.com",
  messagingSenderId: "543749060246",
  appId: `${import.meta.env.VITE_ID}`,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

/*
const firebase = () => {
  return (
    <div>firebase</div>
  )
}

export default firebase
*/

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCUyRoph9gqa9HbqCP9WjjEg5r_rOZbZk",
  authDomain: "netflix-clone-yt-7866a.firebaseapp.com",
  projectId: "netflix-clone-yt-7866a",
  storageBucket: "netflix-clone-yt-7866a.appspot.com",
  messagingSenderId: "9584610652",
  appId: "1:9584610652:web:be467430fc033addac4599"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
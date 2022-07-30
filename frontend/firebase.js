// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgymks2nSZORHJu-AfLtUD36r___UWCvE",
  authDomain: "propane-surfer-357023.firebaseapp.com",
  projectId: "propane-surfer-357023",
  storageBucket: "propane-surfer-357023.appspot.com",
  messagingSenderId: "303600005930",
  appId: "1:303600005930:web:7cef30562fa0f5a18fe453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export default app;
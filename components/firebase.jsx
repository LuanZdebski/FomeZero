// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  databaseURL: 'https://marmitexfomezero-f0761.firebaseio.com',  
  apiKey: "AIzaSyASYtSlvtBNV2-doZ9cHzFjTdMAbI9Ai28",
  authDomain: "marmitexfomezero-f0761.firebaseapp.com",
  projectId: "marmitexfomezero-f0761",
  storageBucket: "marmitexfomezero-f0761.appspot.com",
  messagingSenderId: "995276147069",
  appId: "1:995276147069:web:db72f53d51182af3312414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firestore
export const db = getFirestore(app)

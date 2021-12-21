// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDaGq_iXfsOY4arAZ8QPHIqrSLcnNJ-jKU",
  authDomain: "photolocker-78ccc.firebaseapp.com",
  projectId: "photolocker-78ccc",
  storageBucket: "photolocker-78ccc.appspot.com",
  messagingSenderId: "272970491440",
  appId: "1:272970491440:web:c76a6c236c8776e925aff5"

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };
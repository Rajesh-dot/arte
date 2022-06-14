// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI6zTG2JjaMHpupZUa33Tmw-GTtZtOBgY",
  authDomain: "arte-59e87.firebaseapp.com",
  projectId: "arte-59e87",
  storageBucket: "arte-59e87.appspot.com",
  messagingSenderId: "977143512612",
  appId: "1:977143512612:web:28c2dce0de431c697ee2b1",
  measurementId: "G-PFHT513P92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app }
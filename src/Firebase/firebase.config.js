// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVTQS3xyswMgdo8_r0kKxUyofF5cOP7Zw",
  authDomain: "slice-of-spice-fe78b.firebaseapp.com",
  projectId: "slice-of-spice-fe78b",
  storageBucket: "slice-of-spice-fe78b.appspot.com",
  messagingSenderId: "445451260792",
  appId: "1:445451260792:web:826326184f8503b43eee8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBcYMqH621mcA7aYV7Zu5ciZnI8x4st8Y",
  authDomain: "electronica-para-estudiantes.firebaseapp.com",
  databaseURL: "https://electronica-para-estudiantes-default-rtdb.firebaseio.com",
  projectId: "electronica-para-estudiantes",
  storageBucket: "electronica-para-estudiantes.appspot.com",
  messagingSenderId: "844548619098",
  appId: "1:844548619098:web:41c6e55962c5f776405163",
  measurementId: "G-FHY83KMX5Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



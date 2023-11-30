// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXYC5DQCUV6V1fy6vygNktkQFSDlZp_x0",
  authDomain: "inventory-project-4dcbe.firebaseapp.com",
  projectId: "inventory-project-4dcbe",
  storageBucket: "inventory-project-4dcbe.appspot.com",
  messagingSenderId: "676568846155",
  appId: "1:676568846155:web:2d745e8e34b00b2640a2ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // const NODE_ENV = process.env.NODE_ENV;
// const firebaseConfig = {
//   apiKey: "AIzaSyBbJYwMU4VXC9OROpxLLKR7pNqDvBNL6oQ",
//   authDomain: "multimart-63369.firebaseapp.com",
//   projectId: "multimart-63369",
//   storageBucket: "multimart-63369.appspot.com",
//   messagingSenderId: "857679269659",
//   appId: "1:857679269659:web:3636bd9fd9d577a5bc8dbe"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDwWOJ4GnnkSSiTGPD0HMkGadbS2k7L1hQ",
  authDomain: "furnish-hub-292e1.firebaseapp.com",
  projectId: "furnish-hub-292e1",
  storageBucket: "furnish-hub-292e1.appspot.com",
  messagingSenderId: "116447571776",
  appId: "1:116447571776:web:8d2ffc6b8cb606ea3f54a5",
  measurementId: "G-VZDCQRJLVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
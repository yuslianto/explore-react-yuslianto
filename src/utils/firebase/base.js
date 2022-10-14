import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCxpCryZKqT5iJgEWaV9cb7Ra8di_xoUKg",
  authDomain: "rea4c-auth-2fd2b.firebaseapp.com",
  projectId: "rea4c-auth-2fd2b",
  storageBucket: "rea4c-auth-2fd2b.appspot.com",
  messagingSenderId: "48322876722",
  appId: "1:48322876722:web:8185c3db2d05bfad2ab32b"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
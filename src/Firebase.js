import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC6-DZ3rX5H7RqzOdlq4alYsRKsUkU_F6I",
  authDomain: "news-9b899.firebaseapp.com",
  projectId: "news-9b899",
  storageBucket: "news-9b899.appspot.com",
  messagingSenderId: "1085975883181",
  appId: "1:1085975883181:web:7084701e5bd77855704524",
  measurementId: "G-5WV6VE3XFK"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth();

export {app, authentication};

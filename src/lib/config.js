import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCXP9WHEYWPz-UzADdNgNCPRkWKy1nofU",
  authDomain: "perfumeria-9d531.firebaseapp.com",
  projectId: "perfumeria-9d531",
  storageBucket: "perfumeria-9d531.appspot.com",
  messagingSenderId: "389517617261",
  appId: "1:389517617261:web:fa994f51bcec78b3c7b764"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2bToGNWwMWHfhMRYyTkTYrtu7jZHFv0A",
  authDomain: "avid-streamer-282020.firebaseapp.com",
  projectId: "avid-streamer-282020",
  storageBucket: "avid-streamer-282020.appspot.com",
  messagingSenderId: "885997284997",
  appId: "1:885997284997:web:4ef04b80ecc00cd9b983ec",
  measurementId: "G-4J5PKP3XBP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTxSv2zPZ0r_9GW2jS6rbPxtGb6_AVFiM",
  authDomain: "tickert-ad604.firebaseapp.com",
  projectId: "tickert-ad604",
  storageBucket: "tickert-ad604.appspot.com",
  messagingSenderId: "570080373353",
  appId: "1:570080373353:web:5fbdb81560867b64de50f8",
  measurementId: "G-4PQEW4DBV8",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };

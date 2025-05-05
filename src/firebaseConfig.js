import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxVGchL2iekbLHUjSIDYcYof9w1Fr19SI",
  authDomain: "plant-management-154ee.firebaseapp.com",
  projectId: "plant-management-154ee",
  storageBucket: "plant-management-154ee.firebasestorage.app",
  messagingSenderId: "557192498563",
  appId: "1:557192498563:web:6ef411ec0d9ce579d37ab6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

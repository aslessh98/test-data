// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKyzWyXTNRmuQ09DiPxojBCKK4l2z3XlM",
  authDomain: "test-data-base-48a64.firebaseapp.com",
  projectId: "test-data-base-48a64",
  storageBucket: "test-data-base-48a64.firebasestorage.app",
  messagingSenderId: "161188327924",
  appId: "1:161188327924:web:32ff84b2f04b9ae06249a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database
export const db = getFirestore(app);


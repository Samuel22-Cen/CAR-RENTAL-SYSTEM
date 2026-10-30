// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAn1KKCv_pCWnJSD30hIYuvyO8OwJKst10",
  authDomain: "car-rental-system-19d62.firebaseapp.com",
  projectId: "car-rental-system-19d62",
  storageBucket: "car-rental-system-19d62.firebasestorage.app",
  messagingSenderId: "910466284988",
  appId: "1:910466284988:web:2ab0cef302d4ae413fbfb9",
  measurementId: "G-JH6JQ82N05"
});

// Firestore
const db = firebase.firestore();

// Auth
const auth = firebase.auth();

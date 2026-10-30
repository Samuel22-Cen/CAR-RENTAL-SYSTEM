// Firebase initialization (use your config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// LOGIN FUNCTION
document.getElementById("loginBtn").addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Fetch Firestore user record
      db.collection("users").doc(user.uid).get().then(doc => {
        if (!doc.exists) {
          alert("User record missing in Firestore.");
          return;
        }

        const data = doc.data();

        // Redirect based on role
        if (data.role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "customer.html";
        }
      });
    })
    .catch((error) => {
      alert(error.message);
    });
});

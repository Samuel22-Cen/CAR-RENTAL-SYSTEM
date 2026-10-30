const admin = require("firebase-admin");

// Load your service account key
admin.initializeApp({
  credential: admin.credential.cert(require("./serviceAccountKey.json"))
});

// CHANGE THIS to the UID of the user you want to make admin
const uid = "O9tt2RIeQvNOD9uxBtdIRKuLgav2";

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log("Admin role assigned successfully!");
    console.log("User is now an admin.");
    process.exit();
  })
  .catch(err => {
    console.error("Error assigning admin role:", err);
    process.exit();
  });

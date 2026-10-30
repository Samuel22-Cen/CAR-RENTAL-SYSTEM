firebase.auth().onAuthStateChanged(() => {
  updateAdminNotifBadge();
});

function updateAdminNotifBadge() {
  db.collection("notifications")
    .where("for", "==", "admin")
    .onSnapshot(snapshot => {
      let el = document.getElementById("notif-badge");
      if (!el) return;

      let count = 0;
      snapshot.forEach(doc => {
        if (doc.data().status === "unread") count++;
      });

      el.textContent = count;
      el.style.display = count === 0 ? "none" : "inline-block";
    });
}
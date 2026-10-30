/* ============================================================
   SECURITY.JS — Global Security Layer for Your Project
   Protects admin pages, customer pages, login-required pages,
   sanitizes input, prevents tampering, and validates data.
============================================================ */

/* ---------------------------
   1. Get Logged User
----------------------------*/
function getLoggedUser() {
  let user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) return null;

  // Prevent role tampering
  if (user.role !== "admin" && user.role !== "customer") {
    localStorage.removeItem("loggedInUser");
    return null;
  }

  return user;
}

/* ---------------------------
   2. Protect Admin Pages
----------------------------*/
function protectAdminPage() {
  let user = getLoggedUser();
  if (!user || user.role !== "admin") {
    alert("Access denied.");
    window.location.href = "index.html";
  }
}

/* ---------------------------
   3. Protect Customer Pages
----------------------------*/
function protectCustomerPage() {
  let user = getLoggedUser();
  if (!user || user.role !== "customer") {
    alert("Please sign in first.");
    window.location.href = "index.html";
  }
}

/* ---------------------------
   4. Protect Login-Required Pages
----------------------------*/
function requireLogin() {
  let user = getLoggedUser();
  if (!user) {
    alert("You must be logged in.");
    window.location.href = "index.html";
  }
}

/* ---------------------------
   5. Sanitize User Input (XSS Protection)
----------------------------*/
function sanitize(text) {
  return text.replace(/[&<>"']/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));
}

/* ---------------------------
   6. Validate Car Exists (URL Protection)
----------------------------*/
function validateCarName(carList, carName) {
  if (!carList.some(c => c.name === carName)) {
    alert("Invalid car.");
    window.location.href = "customer.html";
  }
}

/* ---------------------------
   7. Prevent Fake Booking Data
----------------------------*/
function validateBookingData(car, start, end, total) {
  if (!car || !start || !end || isNaN(total)) {
    alert("Invalid booking data.");
    return false;
  }
  return true;
}

/* ---------------------------
   8. Prevent Overlapping Bookings
----------------------------*/
function isRangeBooked(start, end, bookings) {
  let s = new Date(start);
  let e = new Date(end);

  return bookings.some(b => {
    let bs = new Date(b.start);
    let be = new Date(b.end);
    return (s <= be && e >= bs);
  });
}

/* ---------------------------
   9. Export Functions
----------------------------*/
window.Security = {
  getLoggedUser,
  protectAdminPage,
  protectCustomerPage,
  requireLogin,
  sanitize,
  validateCarName,
  validateBookingData,
  isRangeBooked,
  hashPassword  // ← add this
};

async function hashPassword(password) {
  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

function validateBookingData(car, start, end, total) {
  if (!car || !start || !end) return false;

  let s = new Date(start);
  let e = new Date(end);

  if (isNaN(s) || isNaN(e) || e < s) return false;

  let days = Math.floor((e - s) / (1000 * 60 * 60 * 24)) + 1;
  let realTotal = car.price * days;

  return realTotal === total;
}

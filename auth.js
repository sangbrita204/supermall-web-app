import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { logAction } from "./logger.js";

window.loginAdmin = function () {
  const email = email.value;
  const password = password.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      logAction("Admin Login", email);
      window.location.href = "admin.html";
    })
    .catch(err => alert(err.message));
};

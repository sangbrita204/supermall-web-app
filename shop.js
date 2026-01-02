import { db } from "./firebase-config.js";
import { collection, getDocs } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const container = document.getElementById("shopList");
const snap = await getDocs(collection(db, "shops"));

snap.forEach(doc => {
  const s = doc.data();
  container.innerHTML += `
    <div class="card">
      <strong>${s.name}</strong><br>
      Floor: ${s.floor}<br>
      Category: ${s.category}
    </div>
  `;
});

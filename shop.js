import { db } from "./firebase-config.js";
import { collection, getDocs } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const list = document.getElementById("shopList");
const snap = await getDocs(collection(db, "shops"));

snap.forEach(doc => {
  const s = doc.data();
  list.innerHTML += `<li>${s.name} | Floor: ${s.floor} | ${s.category}</li>`;
});

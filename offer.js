import { db } from "./firebase-config.js";
import { collection, getDocs } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const list = document.getElementById("offerList");
const snap = await getDocs(collection(db, "offers"));

snap.forEach(doc => {
  const o = doc.data();
  list.innerHTML += `<li>${o.shop} : ${o.details}</li>`;
});

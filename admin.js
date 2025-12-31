import { db } from "./firebase-config.js";
import { collection, addDoc } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { logAction } from "./logger.js";

window.addShop = async function () {
  await addDoc(collection(db, "shops"), {
    name: shopName.value,
    floor: floor.value,
    category: category.value
  });
  logAction("Shop Created", shopName.value);
  alert("Shop Added");
};

window.addOffer = async function () {
  await addDoc(collection(db, "offers"), {
    shop: offerShop.value,
    details: offerText.value
  });
  logAction("Offer Added", offerShop.value);
  alert("Offer Added");
};

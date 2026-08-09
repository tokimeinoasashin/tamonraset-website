import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadSocialLinks() {
  try {
    const docRef = doc(db, "site-config", "data-social");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const links = docSnap.data();

      document.querySelectorAll("[data-social]").forEach(el => {
        const key = el.getAttribute("data-social");
        const value = links[key];

        if (!value) return;

        if (key === "publisher_email") {
          el.href = `mailto:${value}`;
        } else if (key === "publisher_whatsapp") {
          const cleanNumber = String(value).replace(/[^0-9]/g, "");
          el.href = `https://wa.me/${cleanNumber}`;
        } else if (key === "order_button") {
          const cleanOrderNumber = String(value).replace(/[^0-9]/g, "");
          const message = encodeURIComponent("مرحبًا، أرغب في طلب نسخة من رواية تمنراست 📚");
          el.href = `https://wa.me/${cleanOrderNumber}?text=${message}`;
        } else {
          el.href = value;
        }
      });
    } else {
      console.warn("لم يتم العثور على وثيقة روابط السوشل ميديا في Firestore");
    }
  } catch (error) {
    console.error("خطأ في تحميل روابط السوشل ميديا:", error);
  }
}

loadSocialLinks();

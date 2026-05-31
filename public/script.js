import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "gen-lang-client-0173296700.firebaseapp.com",
  projectId: "gen-lang-client-0173296700",
  storageBucket: "gen-lang-client-0173296700.firebasestorage.app",
  messagingSenderId: "109891504599",
  appId: "1:109891504599:web:2d8048ed8eb17e8b436392",
  measurementId: "G-PYV50WQD35"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

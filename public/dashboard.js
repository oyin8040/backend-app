import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
getAuth,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

import {
getFirestore,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "gen-lang-client-0173296700.firebaseapp.com",
projectId: "gen-lang-client-0173296700",
storageBucket: "gen-lang-client-0173296700.firebasestorage.app",
messagingSenderId: "109891504599",
appId: "1:109891504599:web:2d8048ed8eb17e8b436392"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {

if (!user) {
window.location.href = "index.html";
return;
}

const userRef = doc(db, "users", user.uid);
const userSnap = await getDoc(userRef);

if (userSnap.exists()) {

const data = userSnap.data();

document.getElementById("username").innerText =
  "Welcome, " + data.username;

document.getElementById("wallet").innerText =
  data.wallet + " Points";

}
});

window.logout = async function () {

await signOut(auth);

window.location.href = "index.html";
};

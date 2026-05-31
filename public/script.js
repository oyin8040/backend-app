import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

import {
getFirestore,
doc,
setDoc
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

window.signup = async function () {

const username = document.getElementById("username").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const message = document.getElementById("message");

try {

const userCredential =
  await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

const user = userCredential.user;

await setDoc(doc(db, "users", user.uid), {
  username: username,
  email: email,
  wallet: 100,
  role: "user",
  referral: "",
  createdAt: new Date().toISOString()
});

message.innerText =
  "Account created successfully. Welcome bonus: 100 points!";

} catch (error) {
message.innerText = error.message;
}
};

window.login = async function () {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const message = document.getElementById("message");

try {

await signInWithEmailAndPassword(
  auth,
  email,
  password
);

message.innerText = "Login successful";

setTimeout(() => {
  window.location.href = "dashboard.html";
}, 1000);

} catch (error) {
message.innerText = error.message;
}
};

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDsdGQL-FYLsQdQipQPa8M0BCb0SHg4UTY",
    authDomain: "gen-lang-client-0173296700.firebaseapp.com",
    projectId: "gen-lang-client-0173296700",
    storageBucket: "gen-lang-client-0173296700.firebasestorage.app",
    messagingSenderId: "109891504599",
    appId: "1:109891504599:web:2d8048ed8eb17e8b436392",
    measurementId: "G-PYV50WQD35"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

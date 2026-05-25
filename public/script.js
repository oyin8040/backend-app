const firebaseConfig = {

  apiKey: "AIzaSyDsdGQL-FYLsQdQipQPa8M0BCb0SHg4UTY",

  authDomain: "gen-lang-client-0173296700.firebaseapp.com",

  projectId: "gen-lang-client-0173296700",

  storageBucket: "gen-lang-client-0173296700.firebasestorage.app",

  messagingSenderId: "109891504599",

  appId: "1:109891504599:web:39c7f92da4c6e937436392",

  measurementId: "G-ZXYWVV4VQF"

};

/* INITIALIZE FIREBASE */

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

/* SIGNUP FUNCTION */

function signup(){

    const username = document.getElementById("username").value;

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email,password)

    .then((userCredential)=>{

        const user = userCredential.user;

        /* SAVE USER */

        localStorage.setItem("username",username);

        localStorage.setItem("userEmail",user.email);

        /* MOVE TO DASHBOARD */

        window.location.href = "dashboard.html";

    })

    .catch((error)=>{

        alert(error.message);

    });

}

/* LOGIN FUNCTION */

function login(){

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email,password)

    .then((userCredential)=>{

        const user = userCredential.user;

        localStorage.setItem("userEmail",user.email);

        window.location.href = "dashboard.html";

    })

    .catch((error)=>{

        alert(error.message);

    });

}

/* LOGOUT FUNCTION */

function logout(){

    auth.signOut()

    .then(()=>{

        localStorage.clear();

        window.location.href = "index.html";

    })

    .catch((error)=>{

        alert(error.message);

    });

            }

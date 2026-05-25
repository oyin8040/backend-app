function signup(){

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email,password)

    .then((userCredential)=>{

        const user = userCredential.user;

        /* SAVE USER */

        localStorage.setItem("userEmail",user.email);

        /* MOVE TO NEXT PAGE */

        window.location.href = "dashboard.html";

    })

    .catch((error)=>{

        alert(error.message);

    });

}

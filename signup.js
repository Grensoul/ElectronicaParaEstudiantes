import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#signup-psswd").value;

    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)
        const signupModal = document.querySelector("#signUpModal");
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();
        showMessage("Se ha registrado con éxito", "success");
        // alert("Se ha registrado con éxito");
        // window.location.href = "./login.html";
    } catch (error) {
        if (error.code == "auth/email-already-in-use") {
            showMessage("El correo " + email + " ya está en uso", "error");
        } else if (error.code == "auth/invalid-email") {
            showMessage("El correo " + email + " no es válido", "error");
        } else if (error.code == "auth/weak-password") {
            showMessage("La contraseña  " + password + " no es segura, ingrese una nueva", "error");
        } else {
            showMessage("Ha ocurrido un error inesperado" + error.code, "error");
        }
    }

});
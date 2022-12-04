import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js";

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-psswd").value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        const loginModal = document.querySelector("#loginModal");
        const modal = bootstrap.Modal.getInstance(loginModal);
        modal.hide();

        showMessage("Bienvenido " + email);
    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showMessage("Contraseña incorrecta", "error")
        } else if (error.code === 'auth/user-not-found') {
            showMessage("Usuario no encontrado", "error")
        } else {
            showMessage("Ha ocurrido un error inesperado" + error.code, "error")
        }
    }
});


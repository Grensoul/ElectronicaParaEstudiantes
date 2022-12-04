import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessageLogout } from "./showMessage.js";

const logout = document.querySelector('#Logout')

logout.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await signOut(auth)
      console.log("signup out");
      showMessageLogout("Se ha cerrado la sesión con éxito", "success");
    } catch (error) {
      console.log(error)
    }
  });
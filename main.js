import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { loginCheck } from "./loginCheck.js"

import './signup.js'
import './login.js'
import './logout.js'

onAuthStateChanged(auth, async (user) => {
    console.log(user);

    loginCheck(user);
});

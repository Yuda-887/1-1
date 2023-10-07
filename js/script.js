/**
 * login
 */
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");
const btn = document.getElementById("btn");

function login() {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    btn.style.left = "0";
}

function register() {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    btn.style.left = "110px";
}


login();
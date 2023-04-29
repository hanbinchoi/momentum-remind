const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const section = document.querySelector("#section");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSumbit(event) {
  event.preventDefault();
  loginForm.style.display = "none";
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  section.style.display = "flex";
  loginForm.style.display = "none";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);
if (savedUsername === null) {
  section.style.display = "none";
  loginForm.style.display = "flex";
  loginForm.addEventListener("submit", onLoginSumbit);
} else {
  paintGreetings(savedUsername);
}

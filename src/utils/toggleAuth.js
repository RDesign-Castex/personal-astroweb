function toggleAuth() {
  const loginContainer = document.getElementById("login-container");
  const registerContainer = document.getElementById("register-container");
  if (loginContainer.style.display === "none") {
    loginContainer.style.display = "block";
    registerContainer.style.display = "none";
  } else {
    loginContainer.style.display = "none";
    registerContainer.style.display = "block";
  }
}

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function checkInputs() {

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === "") {
        alert("Username cannot be blank");
        return false;
    }

    if (emailValue === "") {
        alert("Email cannot be blank");
        return false;
    }

    if (passwordValue === "") {
        alert("Password cannot be blank");
        return false;
    }

    if (passwordValue.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

function Signup() {

    if (checkInputs()) {

        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        alert("Account Created Successfully");

        window.location.href = "login.html";
    }
}
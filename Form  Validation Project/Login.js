const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
   


  if(usernameValue === "" || emailValue === "" || passwordValue ===""){
    alert("Please fill in all fields");
    
  }
  const savedUsername = localStorage.getItem("username");
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");
 
  if (usernameValue === savedUsername && emailValue === savedEmail && passwordValue === savedPassword) {
    alert("Login successful");
    window.location.href = "Dashboard.html";
   
  } else {
    alert("Invalid details. Please try again.");
    
  }

});

document.querySelector(".create-link").addEventListener("click" , function(){
  window.location.href ="index.html";
});



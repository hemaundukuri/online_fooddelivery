document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Example validation (replace this with actual backend check if needed)
    if (username === "admin" && password === "password") {
      window.location.href = "home.html"; // Redirect to home page
    } else {
      document.getElementById("error").textContent = "Invalid username or password";
    }
  });
  
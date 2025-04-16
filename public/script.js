  document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Login successful
        window.location.href = "home.html";
      } else {
        // Login failed
        document.getElementById("error").textContent = data.message || "Login failed";
      }
    } catch (error) {
      console.error("Login error:", error);
      document.getElementById("error").textContent = "Server error. Please try again later.";
    }
  });
  
  
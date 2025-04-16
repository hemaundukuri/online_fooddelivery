document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;
    const errorEl = document.getElementById('error');
  
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email, address, contact }),
      });
  
      const data = await res.json();
  
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      alert('Registration successful! Please login.');
      window.location.href = 'login.html';
    } catch (err) {
      errorEl.textContent = err.message;
    }
  });
  
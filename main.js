document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const homeSection = document.getElementById('home');
    const loginSection = document.getElementById('login');
    const registerSection = document.getElementById('register');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    homeLink.addEventListener('click', () => {
        homeSection.classList.remove('hidden');
        loginSection.classList.add('hidden');
        registerSection.classList.add('hidden');
    });

    loginLink.addEventListener('click', () => {
        homeSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
        registerSection.classList.add('hidden');
    });

    registerLink.addEventListener('click', () => {
        homeSection.classList.add('hidden');
        loginSection.classList.add('hidden');
        registerSection.classList.remove('hidden');
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const data = await response.json();
            alert('Login successful');
            localStorage.setItem('token', data.token);
            // Redirect or show a user-specific section
        } else {
            alert('Login failed');
        }
    });

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        if (response.ok) {
            alert('Registration successful');
            loginLink.click();
        } else {
            alert('Registration failed');
        }
    });
});
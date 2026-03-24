function validateSignup() {
    const user = document.getElementById('reg-user').value;
    const pass = document.getElementById('reg-pass').value;
    const confirm = document.getElementById('reg-confirm').value;
    const errorEl = document.getElementById('signup-error');

    // 1. Check Username Length
    if (user.length < 3 || user.length > 20) {
        errorEl.innerText = "Username must be 3-20 characters long.";
        return;
    }

    // 2. Check Password Strength
    if (pass.length < 8) {
        errorEl.innerText = "Password must be at least 8 characters.";
        return;
    }

    // 3. Check if Passwords Match
    if (pass !== confirm) {
        errorEl.innerText = "Passwords do not match.";
        return;
    }

    // Success
    localStorage.setItem('rbx_user', user);
    loginSuccess(user);
}

function validateLogin() {
    const user = document.getElementById('log-user').value;
    if (user) {
        loginSuccess(user);
    } else {
        alert("Please enter your username.");
    }
}

function loginSuccess(name) {
    document.getElementById('auth-box').style.display = 'none';
    document.getElementById('navbar').style.display = 'flex';
    document.getElementById('display-name').innerText = name;
}

function toggleAuth() {
    const s = document.getElementById('signup-section');
    const l = document.getElementById('login-section');
    s.style.display = s.style.display === 'none' ? 'block' : 'none';
    l.style.display = l.style.display === 'none' ? 'block' : 'none';
}

function logout() {
    localStorage.removeItem('rbx_user');
    location.reload();
}

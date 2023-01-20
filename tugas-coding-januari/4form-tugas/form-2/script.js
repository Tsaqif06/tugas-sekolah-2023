const showPassword = document.querySelector('#showPassword');
const password = document.querySelector('#password');

showPassword.addEventListener('click', () => {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
});
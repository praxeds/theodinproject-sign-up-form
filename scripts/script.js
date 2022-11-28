const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

confirmPassword.addEventListener('keydown', function() {
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = '1px solid red'
        password.style.border = '1px solid red'
        document.querySelector('#confirmPassword+span').innerHTML = "passwords don't match!"
    }
})
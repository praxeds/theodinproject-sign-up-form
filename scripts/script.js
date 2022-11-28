const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

confirmPassword.addEventListener('input', function() {
    if (confirmPassword.value !== password.value) {
        confirmPassword.style.border = '1px solid red'
        password.style.border = '1px solid red'
        document.querySelector('#confirmPassword+span').innerHTML = "passwords don't match!"
    } else {
        confirmPassword.style.border = '1px solid #77a265'
        password.style.border = '1px solid #cacaca'
        document.querySelector('#confirmPassword+span').innerHTML = ""
    }
})
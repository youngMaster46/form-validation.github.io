const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = input.nextElementSibling;
    small.innerText = message
}

// show success outline 
const showSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
// check email 
const checkEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (username.value === '') {
        showError(username, 'Username is required')
    }
    else {
        showSuccess(username)
    }

    if (!checkEmail(email.value)) {
        showError(email, 'Email is not valid')
    }
    else {
        showSuccess(email)
    }

    if (password.value === '') {
        showError(password, 'Password is required')
    }
    else {
        showSuccess(password)
    }

    if (password2.value === '') {
        showError(password2, 'Password does not match')
    }
    else {
        showSuccess(password2)
    }
})
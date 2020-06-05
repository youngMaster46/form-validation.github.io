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
    if (re.test(String(email.value).trim().toLowerCase())) {
        showSuccess(email)
    }
    else {
        showError(email, 'Email is incorrect')
    }
}
const getFieldName = (input) => {
    const label = input.previousElementSibling
    return label.innerText.toUpperCase()
}
//check fields 
const checkRequired = (...rest) => {
    return rest.map((el) => {
        if (el.value.trim() === '') {
            showError(el, `${getFieldName(el)} is required`)
        }
        else {
            showSuccess(el)
        }
    })
}
const checkLength = (element, min, max) => {
    if (element.value.length < min) {
        showError(element, `${getFieldName(element)} must be at least ${min} characters`)
    }
    else if (element.value.length > max) {
        showError(element, `${getFieldName(element)} must be less than ${max}`)
    }
    else {
        showSuccess(element)
    }
}
const checkPasswordMatch = (input1, input2) => {
    if (input1.value === input2.value) {
        showSuccess(input1)
        showSuccess(input2)
        if (input1.value.length < 6) {
            checkLength(input1, 6, 25)
            checkLength(input2, 6, 25)
        }
    }
    else {
        showError(input2, `Passwords do not match`)
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkRequired(username, email, password, password2)
    checkEmail(email)
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkPasswordMatch(password, password2)
})
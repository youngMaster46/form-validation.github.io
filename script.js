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
            if (el.id.trim() === 'email') {
                if (checkEmail(el.value)) {
                    showSuccess(el)

                    return el;
                }
                else {
                    showError(el, 'Email is not correct')

                    return el;
                }
            }
            showSuccess(el)
        }
    })
}
form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkRequired(username, email, password, password2)
})
const form = document.querySelector('form');
const input = document.querySelector('input');
const error = document.querySelector('.error');
const readyButton = document.querySelector('.ready');
const redirectButton = document.querySelector('.redirect');

form.onsubmit = (event) => {
    event.preventDefault();
}

/**
 * @param {HTMLInputElement} input
 * @return {boolean}
 */

readyButton.onclick = () => {
    validateInput(input);
}

redirectButton.onclick = () => {
    if (input.value.includes('https://') || input.value.includes('http://')) {
        return location.href=`${input.value}`
    }

    if (!input.value.includes('https://') && !input.value.includes('http://')) {
        return location.href=`http://${input.value}`
    }
}
function validateInput (input) {
    const { value, required, nextElementSibling: validationMessage, type } = input;

    function showError (text) {
        input.classList.add('is-invalid');
        validationMessage.classList.add('invalid-feedback');
        validationMessage.innerText = text;

    }
    function showSuccess () {
        if (type === 'text') {
            validationMessage.classList.remove('invalid-feedback');
            validationMessage.innerText = '';
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
        redirectButton.disabled = false;
    }

    if (required && value === '') {
        showError('This field is required');
        return false;
    }

    if (!value.includes('.') ) {
        showError('This must be a website address');
        return false;
    }

    if (required && value !== '') {
        showSuccess();
        return true;
    }
}
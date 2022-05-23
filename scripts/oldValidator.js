//вызовем в index.js
function enableValidation(formsData) {
    const forms = Array.from(document.querySelectorAll(formsData.formSelector));
    forms.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, formsData);
    });
}

// function toggleSubmitBtn(form, formsData, submitButton) {
//     submitButton.toggleAttribute('disabled', !form.checkValidity());
//     submitButton.classList.toggle(formsData.inactiveButtonClass, !form.checkValidity());
// };

function setEventListeners(form, formsData) {
    const formInputs = Array.from(document.querySelectorAll(formsData.inputSelector));
    const submitButton = form.querySelector(formsData.submitButtonSelector);
    toggleSubmitBtn(form, formsData, submitButton);
    formInputs.forEach((input) => {
        input.addEventListener('input', (evt) => {
            validateFormInput(evt, form, formsData);
            toggleSubmitBtn(form, formsData, submitButton);
        });
    });
}

// function validateFormInput(evt, form, formsData) {
//     const input = evt.target;
//     const error = document.querySelector(`#${input.id}-error`);
//     if (!input.validity.valid) {
//         input.classList.add(formsData.inputErrorClass);
//         error.textContent = input.validationMessage;
//     } else {
//         input.classList.remove(formsData.inputErrorClass);
//         error.textContent = "";
//     }
// }

function clearValidationErrors(formsData) {
    const errors = Array.from(document.querySelectorAll(formsData.spanErrorSelector));
    const inputs = Array.from(document.querySelectorAll(formsData.inputSelector));
    errors.forEach((error) => {
        error.textContent = '';
    });
    inputs.forEach((input) => {
        input.classList.remove(formsData.inputErrorClass);
    });
}

enableValidation(formsData); 

   

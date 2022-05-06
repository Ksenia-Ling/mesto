function enableValidation(formsData) {
    const forms = Array.from(document.querySelectorAll(formsData.formSelector));
    forms.forEach((form) => {
        form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        setEventListeners(form, formsData);
    });
}

function toggleSubmitBtn(form, formsData) {
    const submitButton = form.querySelector(formsData.submitButtonSelector);
    submitButton.toggleAttribute('disabled', !form.checkValidity());
    submitButton.classList.toggle(formsData.inactiveButtonClass, !form.checkValidity());
};

function setEventListeners(form, formsData) {
    const formInputs = Array.from(document.querySelectorAll(formsData.inputSelector));
    formInputs.forEach((input) => {
        input.addEventListener('input', (evt) => validateFormInput(evt, form, formsData));
    });
}

function validateFormInput(evt, form, formsData) {
    const input = evt.target;
    const error = document.querySelector(`#${input.id}-error`);
    toggleSubmitBtn(form, formsData);
    if (!input.validity.valid) {
        input.classList.add(formsData.inputErrorClass);
        error.textContent = input.validationMessage;
    } else {
        input.classList.remove(formsData.inputErrorClass);
        error.textContent = "";
    }
}

enableValidation({
    formSelector: '.popup__input-container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
}); 
import { formsData } from "./formsData.js";

export default class FormValidator {
    constructor(formsData, formSelector) {
        this._formsData = formsData;
        this._form = formSelector;
        this._input = formsData.inputSelector;
        this._submitButtonSelector = formsData.submitButtonSelector;
        this._spanErrorSelector = formsData.spanErrorSelector;
        this._inactiveButtonClass = formsData.inactiveButtonClass;
        this._inputErrorClass = formsData.inputErrorClass;
    }
    
    
    //приватный метод для валидации поля
    _validateFormInput() {
        this._error = this._form.querySelector(`#${inputSelector.id}-error`);
    if (!inputSelector.validity.valid) {
        inputSelector.classList.add(this._inputErrorClass);
        error.textContent = inputSelector.validationMessage;
    } else {
        inputSelector.classList.remove(this._inputErrorClass);
        error.textContent = "";
    }
}
    
    //приватный метод для изменения состоян. сабмита
    _toggleSubmitBtn() {
        this._submitButtonSelector.toggleAttribute('disabled', !this._form.checkValidity());
        this._submitButtonSelector.classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
    }

    //приватная установка слушателей
    _setEventListeners() {
        this._formInputs = Array.from(document.querySelectorAll(formsData.inputSelector));
        this._toggleSubmitBtn();
        this._formInputs.forEach((input) => {
        input.addEventListener('input', (evt) => {
            this._validateFormInput();
            this._toggleSubmitBtn();
        });
    });
    }

    clearValidationErrors() {
        this._errors = Array.from(this._form.querySelectorAll(this._error));
        this._inputs = Array.from(this._form.querySelectorAll(this._input));
        errors.forEach((error) => {
        error.textContent = '';
    });
    this._inputs.forEach((input) => {
        input.classList.remove(formsData.inputErrorClass);
    });
    };

      //публичн. метод, включающий валидацию формы
    enableValidation() {
        this._cardForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

}
  



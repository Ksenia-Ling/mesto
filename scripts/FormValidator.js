import { formConfig } from "./formConfig.js";

export default class FormValidator {
    constructor(formConfig, form) {
        this._formConfig = formConfig;
        this._form = form;
        this._input = formConfig.input;
        this._submitButtonSelector = formConfig.submitButtonSelector;
        this._spanErrorSelector = formConfig.spanErrorSelector;
        this._inactiveButtonClass = formConfig.inactiveButtonClass;
        this._inputErrorClass = formConfig.inputErrorClass;
    }


    //приватный метод для валидации поля
    _validateFormInput(input) {
        this._error = this._form.querySelector(`#${input.id}-error`);
        if (!input.validity.valid) {
            input.classList.add(this._inputErrorClass);
            this._error.textContent = input.validationMessage;
        } else {
            input.classList.remove(this._inputErrorClass);
            this._error.textContent = "";
        }
    }

    //приватный метод для изменения состоян. сабмита
    _toggleSubmitBtn() {
        this._form.querySelector(this._submitButtonSelector).toggleAttribute('disabled', !this._form.checkValidity());
        this._form.querySelector(this._submitButtonSelector).classList.toggle(this._inactiveButtonClass, !this._form.checkValidity());
    }

    //приватная установка слушателей
    _setEventListeners() {

        this._formInputs = Array.from(this._form.querySelectorAll(formConfig.inputSelector));
        this._toggleSubmitBtn();
        this._formInputs.forEach((input) => {
            input.addEventListener('input', () => {
                this._validateFormInput(input);
                this._toggleSubmitBtn();
            });
        });
    }

    clearValidationErrors() {
        this._errors = Array.from(this._form.querySelectorAll(formConfig.spanErrorSelector));
        this._inputs = Array.from(this._form.querySelectorAll(this._input));
        this._errors.forEach((error) => {
            error.textContent = '';
        });
        this._inputs.forEach((input) => {
            input.classList.remove(formConfig.inputErrorClass);
        });
    };

    //публичн. метод, включающий валидацию формы
    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    };

}




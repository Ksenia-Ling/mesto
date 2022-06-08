import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._inputs = this._popup.querySelectorAll('.popup__input');
        this._form = this._popup.querySelector('.popup__input-container');
    }

    // приватный метод , который собирает данные всех полей формы.
    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach((input) => {
            this._inputValues[input.id] = [input.value];
        });
        return this._inputValues;
    }

    // Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса PopupWithForm 
    // не только добавляет обработчик клика иконке закрытия, но и добавляет обработчик сабмита формы.
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());

        })
    }

    // Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
    close() {
        super.close();
        this._form.reset();
    }
}
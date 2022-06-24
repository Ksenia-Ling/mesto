import Popup from "../components/Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        // this._handleFormSubmit = handleFormSubmit;
        this._submitBtn = this._popup.querySelector('.popup__submit-button');
        this._initialBtnText = this._submitBtn.textContent;
    }


    makeSubmit(deleteFunction) {
        this._submitHandler = deleteFunction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._submitBtn.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitBtn.textContent = 'Удаление...';
            this._submitBtn(this._submitHandler);
        })
    }

    close() {
        super.close();
        this._submitBtn.textContent = this._initialBtnText;
    }
}
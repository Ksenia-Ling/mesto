import Popup from "../components/Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._submitBtn = this._popup.querySelector('.popup__submit-button');
        this._popupDeleteForm = this._popup.querySelector('.popup__delete-container');
        this._initialBtnText = this._submitBtn.textContent;
    }


    makeSubmit(deleteFunction) {
        this._submitHandler = deleteFunction;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupDeleteForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitHandler(this);
            this._submitBtn.textContent = 'Удаление...';
        })
    }

    close() {
        super.close();
        this._submitBtn.textContent = this._initialBtnText;
    }
}
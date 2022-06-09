export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
        this._popupCloseIcon = this._popup.querySelector('.popup__close-button');
        this._handleEscClose = this._handleEscClose.bind(this);
    }


    // публичные методы open и close, которые отвечают за открытие и закрытие попапа.
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener("keydown", this._handleEscClose);

    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener("keydown", this._handleEscClose);
    }

    // приватный метод, который содержит логику закрытия попапа клавишей Esc.
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }


    // публичный метод, который добавляет слушатель клика иконке закрытия попапа. 
    // Модальное окно также закрывается при клике на затемнённую область вокруг формы.
    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
                this.close();
            }
        });
    }
}



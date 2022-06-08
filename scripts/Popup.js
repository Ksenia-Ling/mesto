export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(popupSelector);
        this._popupCloseIcon = this._popup.querySelector('.popup__close-button');
    }


    // публичные методы open и close, которые отвечают за открытие и закрытие попапа.
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener("keydown", (evt) => this._handleEscClose(evt));

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
    setEventListeners() {
        this._popupCloseIcon.addEventListener('click', () => this.close());

        // Модальное окно также закрывается при клике на затемнённую область вокруг формы.
        this._popup.addEventListener('mousedown', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            };
        });
    }
}



import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {

    constructor(popupSelector) {
        super(popupSelector);
        this._popupLink = this._popup.querySelector('.popup__image-link');
        this._popupName = this._popup.querySelector('.popup__image-caption');
    }

    // класс перезаписывает родительский метод open
    // В методе open класса PopupWithImage вставляем в попап картинку с src 
    // изображения и подписью к картинке

    open(link, name) {
        super.open();
        this._popupLink.src = link;
        this._popupLink.alt = name;
        this._popupName.textContent = name;
    }
}
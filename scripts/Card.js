import { openPopupWindow } from './utils.js';

export default class Card {
  constructor({ name, link }, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  //приватный метод для работы с разметкой
  _getTemplate() {
    this._cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__element')
      .cloneNode(true);

    return this._cardElement;
  }

  //публич. метод, возвращающий работоспособный, наполненный данными эл-т карточки
  generateCard() {
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.cards__image');
    this._elementName = this._element.querySelector('.cards__heading');
    this._elementLikeBtn = this._element.querySelector('.cards__like-button');
    this._elementRemoveBtn = this._element.querySelector('.cards__remove-button');

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementName.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _zoomImagePopup() {
    this._popupImage = document.querySelector('.popup_image-zoom');
    openPopupWindow(this._popupImage);
    this._popupImage.querySelector('.popup__image-link').src = this._link;
    this._popupImage.querySelector('.popup__image-link').alt = this._name;
    this._popupImage.querySelector('.popup__image-caption').textContent = this._name;
  }

  _deleteCard() {
    this._cardElement.remove();
  }

  _toggleLikeButton() {
    this._elementLikeBtn.classList.toggle('cards__like-button_active');
  }

  //приватный метод для слушателей(для каждого обр. - приватный метод)
  _setEventListeners() {
    this._element.querySelector('.cards__image').addEventListener('click', () => { this._zoomImagePopup() });
    this._elementRemoveBtn.addEventListener('click', () => { this._deleteCard() });
    this._elementLikeBtn.addEventListener('click', () => { this._toggleLikeButton() });
  }
}
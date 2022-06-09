export default class Card {
  constructor({ name, link }, handleCardClick, templateSelector) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
  }

  //приватный метод для работы с разметкой
  _getTemplate() {
    return document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__element')
      .cloneNode(true);
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

  //приватный метод для удаления карточки
  _deleteCard() {
    this._element.remove();
  }

  //приватный метод для лайка
  _toggleLikeButton() {
    this._elementLikeBtn.classList.toggle('cards__like-button_active');
  }

  //приватный метод для слушателей(для каждого обр. - приватный метод)
  _setEventListeners() {
    this._elementImage.addEventListener('click', () =>  this._handleCardClick(this._link, this._name) );
    this._elementRemoveBtn.addEventListener('click', () =>  this._deleteCard() );
    this._elementLikeBtn.addEventListener('click', () =>  this._toggleLikeButton() );
  }
}
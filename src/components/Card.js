export default class Card {
  constructor({ data, userId}, {handleCardClick}, {handleDeleteCard}, {handleLikeClick}, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeClick = handleLikeClick;
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
    this._likeCounter = this._element.querySelector('.cards__like-counter');
    this._elementRemoveBtn = this._element.querySelector('.cards__remove-button');

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementName.textContent = this._name;
    this._addRemoveButton();
    this.addLikeActiveClass();
    this.handleLikeCounter(this._likes);
    this._setEventListeners();

    return this._element;
  }

  getCardId() {
    return this._cardId;
  }

  _addRemoveButton() {
    if (this._userId === this._ownerId) {
      this._elementRemoveBtn.style.visibility = 'visible';
    }
  }

  // метод для удаления карточки
  deleteCard() {
    this._element.remove();
  }

  //метод для добавления лайка
  addLike(likes) {
    this._elementLikeBtn.classList.add('cards__like-button_active');
    this.handleLikeCounter(likes);
    this._likes = likes;
  }

  //метод для удаления лайка
  removeLike(likes) {
    this._elementLikeBtn.classList.remove('cards__like-button_active');
    this.handleLikeCounter(likes);
    this._likes = likes;
  }

  // проверка, есть ли лайк
  checkLike() {
    return this._likes.find((like) => {
      return like._id === this._userId;
    });
  }

  handleLikeCounter(likes) {
    this._likeCounter.textContent = likes.length;
  }

  addLikeActiveClass() {
    if (this.checkLike(true)) {
      this._elementLikeBtn.classList.add("cards__like-button_active");
    }
  }

  //приватный метод для слушателей(для каждого обр. - приватный метод)
  _setEventListeners() {
    this._elementImage.addEventListener('click', () => this._handleCardClick(this._link, this._name));
    this._elementRemoveBtn.addEventListener('click', () => this._handleDeleteCard(this._cardId));
    this._elementLikeBtn.addEventListener('click', () => this._handleLikeClick(this));
  }
}
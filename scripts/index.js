const content = document.querySelector('.content');
const editProfileButton = content.querySelector('.profile__edit-button');
const popupProfileWindow = document.querySelector('.popup_profile');
const popupProfileClose = popupProfileWindow.querySelector('.popup__close-button');

const userDataForm = popupProfileWindow.querySelector('.popup__input-container');
const nameInput = userDataForm.querySelector('.popup__input_name');
const jobInput = userDataForm.querySelector('.popup__input_job');
const userName = content.querySelector('.profile__heading');
const userJob = content.querySelector('.profile__subheading');

function openPopupProfileWindow() {
  popupProfileWindow.classList.toggle('popup_opened');
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
}

function closePopupProfileWindow() {
  popupProfileWindow.classList.toggle('popup_opened');
}

editProfileButton.addEventListener('click', openPopupProfileWindow);
popupProfileClose.addEventListener('click', closePopupProfileWindow);

function formSubmitHandler(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopupProfileWindow();
}

userDataForm.addEventListener('submit', formSubmitHandler);

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsContainer = document.querySelector('.cards');
const templateCards = document.querySelector('.templateCards');

function addCards() {
  const htmlCards = initialCards.map(getElement);
  cardsContainer.append(...htmlCards);
}

addCards();

function getElement(card) {
  const getTemplateCard = templateCards.content.cloneNode(true);
  const cardsImage = getTemplateCard.querySelector('.cards__image');
  const cardsHeading = getTemplateCard.querySelector('.cards__heading');
  const likeButton = getTemplateCard.querySelector('.cards__like-button');
  const removeButton = getTemplateCard.querySelector('.cards__remove-button');
  cardsImage.src = card.link;
  cardsImage.alt = card.name;
  cardsHeading.textContent = card.name;

  cardsImage.addEventListener('click', () => zoomImagePopup(card));

  removeButton.addEventListener('click', function (evt) {
    evt.target.closest('.cards__element').remove();
  });

  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like-button_active');
  });

  return getTemplateCard;
}

const popupImageZoom = document.querySelector('.popup_image-zoom');
let popupImageLink = popupImageZoom.querySelector('.popup__image-link');
let popupImageCaption = popupImageZoom.querySelector('.popup__image-caption');
const popupImageZoomClose = popupImageZoom.querySelector('.popup__close-button')

function togglePopupImageWindow() {
  popupImageZoom.classList.toggle('popup_opened');
}

function zoomImagePopup(item) {
  togglePopupImageWindow();
  popupImageLink.src = item.link;
  popupImageCaption.textContent = item.name;
}

popupImageZoomClose.addEventListener('click', togglePopupImageWindow);

const addPlaceButton = content.querySelector('.profile__add-button');
const popupPlaceWindow = document.querySelector('.popup_new-place');
const popupPlaceClose = popupPlaceWindow.querySelector('.popup__close-button');

const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
const titleInput = newPlaceForm.querySelector('.popup__input_title');
const linkInput = newPlaceForm.querySelector('.popup__input_link');


function togglePopupPlaceWindow() {
  popupPlaceWindow.classList.toggle('popup_opened');
}

addPlaceButton.addEventListener('click', togglePopupPlaceWindow);
popupPlaceClose.addEventListener('click', togglePopupPlaceWindow);

function placeFormSubmitHandler(evt) {
  evt.preventDefault();
  const newCard = getElement({ name: titleInput.value, link: linkInput.value });
  cardsContainer.prepend(newCard);
  togglePopupPlaceWindow();
}

newPlaceForm.addEventListener('submit', placeFormSubmitHandler);


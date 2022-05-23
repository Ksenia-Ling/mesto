import { initialCards } from './initialCards.js';
import { formsData } from './formsData.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { openPopupWindow, closePopupWindow } from './utils.js';


const content = document.querySelector('.content');
const profileEditButton = content.querySelector('.profile__edit-button');
const popupProfileWindow = document.querySelector('.popup_profile');
const popupProfileClose = popupProfileWindow.querySelector('.popup__close-button');

const userDataForm = popupProfileWindow.querySelector('.popup__input-container');
const nameInput = userDataForm.querySelector('.popup__input_name');
const jobInput = userDataForm.querySelector('.popup__input_job');
const userName = content.querySelector('.profile__heading');
const userJob = content.querySelector('.profile__subheading');
//const userDataSubmitButton = userDataForm.querySelector('.popup__submit-button_profile')

const cardsContainer = document.querySelector('.cards');
//const templateCards = document.querySelector('.templateCards');

const popupImageZoom = document.querySelector('.popup_image-zoom');
//const popupImageLink = popupImageZoom.querySelector('.popup__image-link');
//const popupImageCaption = popupImageZoom.querySelector('.popup__image-caption');
//const popupImageZoomClose = popupImageZoom.querySelector('.popup__close-button')

const placeAddingButton = content.querySelector('.profile__add-button');
const popupPlaceWindow = document.querySelector('.popup_new-place');
const popupPlaceClose = popupPlaceWindow.querySelector('.popup__close-button');
//const placeSubmitButton = popupPlaceWindow.querySelector('.popup__submit-button_new-place');

const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
const titleInput = newPlaceForm.querySelector('.popup__input_title');
const linkInput = newPlaceForm.querySelector('.popup__input_link');

const popupOverlays = Array.from(document.querySelectorAll('.popup'));

const cardValid = new FormValidator();
//для каждой формы создать экз. класса FormValidator
const userDataFormValidator = cardValid(formsData, userDataForm);
const newPlaceFormValidator = cardValid(formsData, newPlaceForm);

//для каждой карточки создать экземпляр класса Card
initialCards.forEach((item) => {
  const card = new Card(item, '.templateCards');
  const cardElement = card.generateCard();
  cardsContainer.append(cardElement);
});

userDataFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopupWindow(popupProfileWindow);
};

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCard = new Card({ name: titleInput.value, link: linkInput.value }, ".templateCards");
  cardsContainer.prepend(newCard);
  closePopupWindow(popupPlaceWindow);
  newPlaceForm.reset();
};

profileEditButton.addEventListener('click', function () {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  userDataFormValidator.clearValidationErrors(); //formsData
  userDataFormValidator._toggleSubmitBtn();
  openPopupWindow(popupProfileWindow);
});

popupProfileClose.addEventListener('click', () => closePopupWindow(popupProfileWindow));

userDataForm.addEventListener('submit', handleProfileFormSubmit);

//popupImageZoomClose.addEventListener('click', () => closePopupWindow(popupImageZoom));

placeAddingButton.addEventListener('click', function () {
  newPlaceFormValidator.clearValidationErrors(); //formsData
  newPlaceFormValidator._toggleSubmitBtn();;
  openPopupWindow(popupPlaceWindow);
});

popupPlaceClose.addEventListener('click', () => closePopupWindow(popupPlaceWindow));

newPlaceForm.addEventListener('submit', handlePlaceFormSubmit);

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopupWindow(evt.target);
    };
  });
});










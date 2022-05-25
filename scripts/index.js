import { initialCards } from './initialCards.js';
import { formConfig } from './formConfig.js';
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

const cardsContainer = document.querySelector('.cards');

const popupImageZoom = document.querySelector('.popup_image-zoom');
const popupImageZoomClose = popupImageZoom.querySelector('.popup__close-button')

const placeAddingButton = content.querySelector('.profile__add-button');
const popupPlaceWindow = document.querySelector('.popup_new-place');
const popupPlaceClose = popupPlaceWindow.querySelector('.popup__close-button');

const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
const titleInput = newPlaceForm.querySelector('.popup__input_title');
const linkInput = newPlaceForm.querySelector('.popup__input_link');

const popupOverlays = Array.from(document.querySelectorAll('.popup'));

//для каждой формы создать экз. класса FormValidator
const userDataFormValidator = new FormValidator(formConfig, userDataForm);
const newPlaceFormValidator = new FormValidator(formConfig, newPlaceForm);

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
  const newCardElement = newCard.generateCard();
  cardsContainer.prepend(newCardElement);
  closePopupWindow(popupPlaceWindow);
  newPlaceForm.reset();
};

profileEditButton.addEventListener('click', function () {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  userDataFormValidator.clearValidationErrors();
  userDataFormValidator._toggleSubmitBtn();
  openPopupWindow(popupProfileWindow);
});

popupProfileClose.addEventListener('click', () => closePopupWindow(popupProfileWindow));

userDataForm.addEventListener('submit', handleProfileFormSubmit);

placeAddingButton.addEventListener('click', function () {
  newPlaceFormValidator.clearValidationErrors();
  newPlaceFormValidator._toggleSubmitBtn();;
  openPopupWindow(popupPlaceWindow);
});

popupPlaceClose.addEventListener('click', () => closePopupWindow(popupPlaceWindow));

popupImageZoomClose.addEventListener('click', () => closePopupWindow(popupImageZoom));

newPlaceForm.addEventListener('submit', handlePlaceFormSubmit);

popupOverlays.forEach((overlay) => {
  overlay.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopupWindow(evt.target);
    };
  });
});










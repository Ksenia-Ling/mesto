import { initialCards } from './initialCards.js';
import { formConfig } from './formConfig.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { openPopupWindow, closePopupWindow, popupImageZoom } from './utils.js';


const content = document.querySelector('.content');
const profileEditButton = content.querySelector('.profile__edit-button');
const popupProfileWindow = document.querySelector('.popup_type_profile-edit');
const popupProfileClose = popupProfileWindow.querySelector('.popup__close-button');

const userDataForm = popupProfileWindow.querySelector('.popup__input-container');
const nameInput = userDataForm.querySelector('.popup__input_type_name');
const jobInput = userDataForm.querySelector('.popup__input_type_job');
const userName = content.querySelector('.profile__heading');
const userJob = content.querySelector('.profile__subheading');

const cardsContainer = document.querySelector('.cards');


const popupImageZoomClose = popupImageZoom.querySelector('.popup__close-button')

const placeAddingButton = content.querySelector('.profile__add-button');
const popupPlaceWindow = document.querySelector('.popup_type_new-place');
const popupPlaceClose = popupPlaceWindow.querySelector('.popup__close-button');

const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
const titleInput = newPlaceForm.querySelector('.popup__input_type_title');
const linkInput = newPlaceForm.querySelector('.popup__input_type_link');

const popupOverlays = Array.from(document.querySelectorAll('.popup'));

//для каждой формы создать экз. класса FormValidator
const userDataFormValidator = new FormValidator(formConfig, userDataForm);
const newPlaceFormValidator = new FormValidator(formConfig, newPlaceForm);

function createNewCard(item, templateSelector) {
  return new Card(item, templateSelector).generateCard();
}

//для каждой карточки создать экземпляр класса Card
initialCards.forEach((item) => {
  cardsContainer.append(createNewCard(item, '.templateCards'));
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
  cardsContainer.prepend(createNewCard({ name: titleInput.value, link: linkInput.value }, '.templateCards'));
  closePopupWindow(popupPlaceWindow);
  newPlaceForm.reset();
};

profileEditButton.addEventListener('click', function () {
  userDataFormValidator.clearValidationErrors();
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  userDataFormValidator.toggleSubmitBtn();
  openPopupWindow(popupProfileWindow);
});

popupProfileClose.addEventListener('click', function () { 
  closePopupWindow(popupProfileWindow);
});

userDataForm.addEventListener('submit', handleProfileFormSubmit);

placeAddingButton.addEventListener('click', function () {
  newPlaceFormValidator.clearValidationErrors();
  newPlaceFormValidator.toggleSubmitBtn();;
  openPopupWindow(popupPlaceWindow);
  newPlaceFormValidator.clearValidationErrors();
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










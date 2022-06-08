import { initialCards } from './initialCards.js';
import { formConfig } from './formConfig.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

const content = document.querySelector('.content');
const profileEditButton = content.querySelector('.profile__edit-button');
const popupProfileWindow = document.querySelector('.popup_type_profile-edit');

const userDataForm = popupProfileWindow.querySelector('.popup__input-container');
const nameInput = userDataForm.querySelector('.popup__input_type_name');
const jobInput = userDataForm.querySelector('.popup__input_type_job');

const cardsContainer = document.querySelector('.cards');

const placeAddingButton = content.querySelector('.profile__add-button');
const popupPlaceWindow = document.querySelector('.popup_type_new-place');

const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
const titleInput = newPlaceForm.querySelector('.popup__input_type_title');
const linkInput = newPlaceForm.querySelector('.popup__input_type_link');

//для каждой формы - экз. класса FormValidator
const userDataFormValidator = new FormValidator(formConfig, userDataForm);
const newPlaceFormValidator = new FormValidator(formConfig, newPlaceForm);

// Отрисовка каждого отдельного элемента осуществляется функцией renderer
const cardsList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardsList.addItem(createNewCard(item, '.templateCards'));
  }
},
  cardsContainer
);

const popupWithImage = new PopupWithImage('.popup_type_image-zoom');

const userInfo = new UserInfo({ nameSelector: '.profile__heading', jobSelector: '.profile__subheading' });

// Для каждого попапа - свой экземпляр класса PopupWithForm
const profileForm = new PopupWithForm({
  popupSelector: '.popup_type_profile-edit',
  handleFormSubmit: () => {
    userInfo.setUserInfo(nameInput.value, jobInput.value);
    profileForm.close();
  }
});

const placeForm = new PopupWithForm({
  popupSelector: '.popup_type_new-place',
  handleFormSubmit: () => {
    cardsContainer.prepend(createNewCard({ name: titleInput.value, link: linkInput.value }, '.templateCards'));
    placeForm.close();
  }
});

function createNewCard(item) {
  return new Card(item,
    (link, name) => {
      popupWithImage.open(link, name)
    }, '.templateCards').generateCard();
}

cardsList.renderItems();

userDataFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();

profileForm.setEventListeners();
placeForm.setEventListeners();
popupWithImage.setEventListeners();


profileEditButton.addEventListener('click', () => {
  userDataFormValidator.clearValidationErrors();
  const info = userInfo.getUserInfo();
  profileForm.open();
  nameInput.value = info.name;
  jobInput.value = info.job;
  userDataFormValidator.toggleSubmitBtn();
});

placeAddingButton.addEventListener('click', function () {
  newPlaceFormValidator.clearValidationErrors();
  newPlaceFormValidator.toggleSubmitBtn();;
  placeForm.open();
  newPlaceFormValidator.clearValidationErrors();
});










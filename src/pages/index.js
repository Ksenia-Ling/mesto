import './index.css';
import {
  profileEditButton,
  userDataForm,
  nameInput,
  jobInput,
  cardsContainer,
  placeAddingButton,
  newPlaceForm,
  titleInput,
  linkInput,
  initialCards
} from '../utils/constants.js';
import { formConfig } from '../utils/formConfig.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';


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

placeAddingButton.addEventListener('click', () => {
  newPlaceFormValidator.clearValidationErrors();
  newPlaceFormValidator.toggleSubmitBtn();;
  placeForm.open();
  newPlaceFormValidator.clearValidationErrors();
});










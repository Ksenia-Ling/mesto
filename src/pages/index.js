import './index.css';
import {
  profileEditButton,
  profileAvatarButton,
  profileName,
  profileJob,
  profileAvatar,
  userDataForm,
  nameInput,
  jobInput,
  cardsContainer,
  placeAddingButton,
  newPlaceForm,
  titleInput,
  linkInput,
  avatarEditForm,
  avatarLinkInput,
  // cardRemoveButton
  // initialCards
} from '../utils/constants.js';
import { formConfig } from '../utils/formConfig.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-43',
  headers: {
    authorization: '41f7ca70-8b6e-4b09-83a9-c8acb2ddbee8',
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([currentUserInfo, cards]) => {
    profileName.textContent = currentUserInfo.name,
      profileJob.textContent = currentUserInfo.about,
      profileAvatar.src = currentUserInfo.avatar,
      userId = currentUserInfo._id;
    cardsList.renderItems(cards, currentUserInfo._id);
  })
  .catch((err) => {
    console.log(err);
  })


//для каждой формы - экз. класса FormValidator
const userDataFormValidator = new FormValidator(formConfig, userDataForm);
const newPlaceFormValidator = new FormValidator(formConfig, newPlaceForm);
const avatarEditFormValidator = new FormValidator(formConfig, avatarEditForm);

// Отрисовка каждого отдельного элемента осуществляется функцией renderer
const cardsList = new Section({
  renderer: (data, userId) => {
    cardsList.addItem(createNewCard(data, userId));
  },
},
  cardsContainer
);

const popupWithImage = new PopupWithImage('.popup_type_image-zoom');

const popupAvatarEdit = new PopupWithForm({
  popupSelector: '.popup_type_avatar-edit',
  handleFormSubmit: () => {
    api.editAvatar(avatarLinkInput.value)
      .then((res) =>
        userInfo.setAvatar(res.avatar))
    popupAvatarEdit.close()
  }
});

const userInfo = new UserInfo({
  nameSelector: '.profile__heading',
  jobSelector: '.profile__subheading',
  avatarSelector: '.profile__avatar',
});

// Для каждого попапа - свой экземпляр класса PopupWithForm
const profileForm = new PopupWithForm({
  popupSelector: '.popup_type_profile-edit',
  handleFormSubmit: () => {
    // userInfo.setUserInfo(nameInput.value, jobInput.value);
    api.editProfile(nameInput.value, jobInput.value)
      .then((res) =>
        userInfo.setUserInfo(res.name, res.about))
    profileForm.close();
  }
});

const placeForm = new PopupWithForm({
  popupSelector: '.popup_type_new-place',
  handleFormSubmit: () => {
    api.addCard(titleInput.value, linkInput.value)
      .then((res) => {
        cardsContainer.prepend(createNewCard({ name: res.name, link: res.link, id: res._id }, '.templateCards'));
        placeForm.close();
      })
  }
});

const popupDeleteConfirm = new PopupWithConfirmation(
  '.popup_type_delete-confirmation');

function createNewCard(data, userId) {
  const card = new Card({ data, userId},
    {
      handleCardClick:
        (link, name) => {
          popupWithImage.open(link, name)
        }
    },
    {
      handleDeleteCard:
        (cardId) => {
          popupDeleteConfirm.open();
          popupDeleteConfirm.makeSubmit(() => {
            api.deleteCard(cardId)
              .then(() => {
                popupDeleteConfirm.close();
                card.deleteCard();
              })
              .catch((err) => {
                console.log(err)
              })
          })
        }
    },
    {
      handleLikeClick:
        () => {
          if (card.checkLike()) {
            api.removeLike(card.getCardId())
              .then((res) =>
                card.removeLike(res.likes))
              .catch((err) => {
                console.log(err);
              })
          } else {
            api.addLike(card.getCardId())
              .then((res) =>
                card.addLike(res.likes))
              .catch((err) => {
                console.log(err);
              })
          }
        }
    },
    '.templateCards');
  return card.generateCard();
}


userDataFormValidator.enableValidation();
newPlaceFormValidator.enableValidation();
avatarEditFormValidator.enableValidation();

profileForm.setEventListeners();
placeForm.setEventListeners();
popupWithImage.setEventListeners();
popupAvatarEdit.setEventListeners();
popupDeleteConfirm.setEventListeners();

profileAvatarButton.addEventListener('click', () => {
  avatarEditFormValidator.clearValidationErrors();
  avatarEditFormValidator.toggleSubmitBtn();
  popupAvatarEdit.open();
  avatarEditFormValidator.clearValidationErrors();
  ;
})

profileEditButton.addEventListener('click', () => {
  userDataFormValidator.clearValidationErrors();
  const info = userInfo.getUserInfo();
  profileForm.open();
  nameInput.value = info.name;
  jobInput.value = info.job;
  avatarLinkInput = info.avatar;
  userDataFormValidator.toggleSubmitBtn();
});

placeAddingButton.addEventListener('click', () => {
  newPlaceFormValidator.clearValidationErrors();
  newPlaceFormValidator.toggleSubmitBtn();;
  placeForm.open();
  newPlaceFormValidator.clearValidationErrors();
});










import tulskayaImage from '../images/elements/tulskaya_oblast.jpg';
import baikalImage from '../images/elements/baikal_irkutsk.jpg';
import nahodkaImage from '../images/elements/primorsky_krai_nahodka.jpg';
import kamchatkaImage from '../images/elements/kamchatka.jpg';
import ruskealaImage from '../images/elements/ruskeala_karelia.jpg';
import petersburgImage from '../images/elements/saint-petersburg.jpg';


export const content = document.querySelector('.content');
export const profileEditButton = content.querySelector('.profile__edit-button');
export const popupProfileWindow = document.querySelector('.popup_type_profile-edit');

export const profileAvatarButton = content.querySelector('.profile__avatar-overlay');
export const popupAvatarEditWindow = document.querySelector('.popup_type_avatar-edit');
export const avatarEditForm = popupAvatarEditWindow.querySelector('.popup__input-container');
export const avatarLinkInput = avatarEditForm.querySelector('.popup__input_type_avatar-link');

export const profileName = content.querySelector('.profile__heading');
export const profileJob = content.querySelector('.profile__subheading');
export const profileAvatar = content.querySelector('.profile__avatar');

export const userDataForm = popupProfileWindow.querySelector('.popup__input-container');
export const nameInput = userDataForm.querySelector('.popup__input_type_name');
export const jobInput = userDataForm.querySelector('.popup__input_type_job');

export const cardsContainer = document.querySelector('.cards');
export const cardRemoveButton = document.querySelector('.cards__remove-button');

export const placeAddingButton = content.querySelector('.profile__add-button');
export const popupPlaceWindow = document.querySelector('.popup_type_new-place');

export const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
export const titleInput = newPlaceForm.querySelector('.popup__input_type_title');
export const linkInput = newPlaceForm.querySelector('.popup__input_type_link');

// export const initialCards = [
//   {
//     name: 'Тульская область',
//     link: tulskayaImage
//   },
//   {
//     name: 'Озеро Байкал, Иркутск',
//     link: baikalImage
//   },
//   {
//     name: 'Находка, Приморский край',
//     link: nahodkaImage
//   },
//   {
//     name: 'Камчатка',
//     link: kamchatkaImage
//   },
//   {
//     name: 'Рускеала, респ. Карелия',
//     link: ruskealaImage
//   },
//   {
//     name: 'Санкт-Петербург',
//     link: petersburgImage
//   }
// ];

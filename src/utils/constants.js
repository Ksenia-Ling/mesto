export const content = document.querySelector('.content');
export const profileEditButton = content.querySelector('.profile__edit-button');
export const popupProfileWindow = document.querySelector('.popup_type_profile-edit');

export const userDataForm = popupProfileWindow.querySelector('.popup__input-container');
export const nameInput = userDataForm.querySelector('.popup__input_type_name');
export const jobInput = userDataForm.querySelector('.popup__input_type_job');

export const cardsContainer = document.querySelector('.cards');

export const placeAddingButton = content.querySelector('.profile__add-button');
export const popupPlaceWindow = document.querySelector('.popup_type_new-place');

export const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
export const titleInput = newPlaceForm.querySelector('.popup__input_type_title');
export const linkInput = newPlaceForm.querySelector('.popup__input_type_link');

export const initialCards = [
    {
      name: 'Тульская область',
      link: './images/elements/tulskaya_oblast.jpg'
    },
    {
      name: 'Озеро Байкал, Иркутск',
      link: './images/elements/baikal_irkutsk.jpg'
    },
    {
      name: 'Находка, Приморский край',
      link: './images/elements/primorsky_krai_nahodka.jpg'
    },
    {
      name: 'Камчатка',
      link: './images/elements/kamchatka.jpg'
    },
    {
      name: 'Рускеала, респ. Карелия',
      link: './images/elements/ruskeala_karelia.jpg'
    },
    {
      name: 'Санкт-Петербург',
      link: './images/elements/saint-petersburg.jpg'
    }
  ];

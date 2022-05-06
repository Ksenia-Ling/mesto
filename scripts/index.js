const content = document.querySelector('.content');
const profileEditButton = content.querySelector('.profile__edit-button');
const popupProfileWindow = document.querySelector('.popup_profile');
const popupProfileClose = popupProfileWindow.querySelector('.popup__close-button');

const userDataForm = popupProfileWindow.querySelector('.popup__input-container');
const nameInput = userDataForm.querySelector('.popup__input_name');
const jobInput = userDataForm.querySelector('.popup__input_job');
const userName = content.querySelector('.profile__heading');
const userJob = content.querySelector('.profile__subheading');
const userDataSubmitButton = userDataForm.querySelector('.popup__submit-button_profile')

const cardsContainer = document.querySelector('.cards');
const templateCards = document.querySelector('.templateCards');

const popupImageZoom = document.querySelector('.popup_image-zoom');
const popupImageLink = popupImageZoom.querySelector('.popup__image-link');
const popupImageCaption = popupImageZoom.querySelector('.popup__image-caption');
const popupImageZoomClose = popupImageZoom.querySelector('.popup__close-button')

const placeAddingButton = content.querySelector('.profile__add-button');
const popupPlaceWindow = document.querySelector('.popup_new-place');
const popupPlaceClose = popupPlaceWindow.querySelector('.popup__close-button');
const placeSubmitButton = popupPlaceWindow.querySelector('.popup__submit-button_new-place');

const newPlaceForm = popupPlaceWindow.querySelector('.popup__input-container');
const titleInput = newPlaceForm.querySelector('.popup__input_title');
const linkInput = newPlaceForm.querySelector('.popup__input_link');

const popupOverlays = Array.from(document.querySelectorAll('.popup'));

function openPopupWindow(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupByEsc);
}

function closePopupWindow(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupByEsc);
}

function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    closePopupWindow(document.querySelector('.popup_opened'));
  }
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopupWindow(popupProfileWindow);
}

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

function zoomImagePopup(item) {
  openPopupWindow(popupImageZoom);
  popupImageLink.src = item.link;
  popupImageLink.alt = item.name;
  popupImageCaption.textContent = item.name;

}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const newCard = getElement({ name: titleInput.value, link: linkInput.value });
  cardsContainer.prepend(newCard);
  closePopupWindow(popupPlaceWindow);
  newPlaceForm.reset();
}

profileEditButton.addEventListener('click', function () {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  clearValidationErrors(formsData);
  toggleSubmitBtn(userDataForm, formsData, userDataSubmitButton);
  openPopupWindow(popupProfileWindow);
});

popupProfileClose.addEventListener('click', () => closePopupWindow(popupProfileWindow));

userDataForm.addEventListener('submit', handleProfileFormSubmit);

popupImageZoomClose.addEventListener('click', () => closePopupWindow(popupImageZoom));

placeAddingButton.addEventListener('click', function () {
  clearValidationErrors(formsData);
  toggleSubmitBtn(newPlaceForm, formsData, placeSubmitButton);
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










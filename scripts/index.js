let content = document.querySelector('.content');
let editProfileButton = content.querySelector('.profile__edit-button');
let popupWindow = document.querySelector('.popup');
let popupClose = popupWindow.querySelector('.popup__close-button');

let userDataForm = popupWindow.querySelector('.popup__input-container');
let nameInput = userDataForm.querySelector('.popup__input_name');
let jobInput = userDataForm.querySelector('.popup__input_job');
let userName = content.querySelector('.profile__heading');
let userJob = content.querySelector('.profile__subheading');

function togglePopupWindow() {
    popupWindow.classList.toggle('popup_opened');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}

editProfileButton.addEventListener('click', togglePopupWindow);
popupClose.addEventListener('click', togglePopupWindow);

function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value; 
    userJob.textContent = jobInput.value;
    togglePopupWindow();
}

userDataForm.addEventListener('submit', formSubmitHandler);
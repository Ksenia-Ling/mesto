function closePopupByEsc(evt) {
    if (evt.key === "Escape") {
      closePopupWindow(document.querySelector('.popup_opened'));
    }
  }

function openPopupWindow(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", closePopupByEsc);
}

function closePopupWindow(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", closePopupByEsc);
}

export {openPopupWindow, closePopupWindow};
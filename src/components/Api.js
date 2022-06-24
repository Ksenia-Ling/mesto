export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  // получение информации о пользователе
  getUserInfo() {
    return fetch(`${this._url}/users/me`, { headers: this._headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

  // получение изначальных карточек 
  getInitialCards() {
    return fetch(`${this._url}/cards`, { headers: this._headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

  // метод редактирования профиля
  editProfile(userName, userAbout) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

  // метод добавления карточки
  addCard(cardName, cardLink) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardName,
        link: cardLink
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

  
  // метод удаления карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

  // метод редактирования аватара пользователя
  editAvatar(avatarLink) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

  // метод добавления лайка
  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

  // метод удаления лайка
  removeLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        };
      })
  }

}


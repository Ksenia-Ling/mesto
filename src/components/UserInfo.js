export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
        this._avatarElement = document.querySelector(avatarSelector);
    }

    // публичный метод getUserInfo, который возвращает объект с данными пользователя.
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
            avatar: this._avatarElement.src,
        };
    }

    // публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(name, job) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    }

    // публичный метод для замены аватара
    setAvatar(avatarLink) {
        this._avatarElement.src = avatarLink;
    }
}
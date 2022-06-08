export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._nameElement = document.querySelector(nameSelector);
        this._jobElement = document.querySelector(jobSelector);
    }

    // публичный метод getUserInfo, который возвращает объект с данными пользователя.
    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        };
    }

    // публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(name, job) {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    }
}
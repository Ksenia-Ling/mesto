// класс получает разметку через функцию-колбэк и вставляет её в контейнер.
export default class Section {
    constructor({ renderer }, container) {
        this._renderer = renderer;
        this._container = container;
    }


    // публичный метод, который отвечает за отрисовку всех элементов. 
    renderItems(items) {
        this._renderedItems = items;
        this._renderedItems.forEach((item) => {
            this._renderer(item);

        });
    }

    // публичный метод, который принимает DOM-элемент и добавляет его в контейнер.
    addItem(element) {
        this._container.append(element);
    }

}
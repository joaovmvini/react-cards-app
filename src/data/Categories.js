// Essa classe será observada (padrão Observable)
// Ela será observada por outros objetos.
// Esses objetos "inscritos" devem ser notificados quando alguma alteração ocorre

export default class Categories {
    constructor() {
        this.categories = [];
        // Objetos que estão observando o comportamento desta classe
        this._observers = [];
    }

    observe(fn) {
        this._observers.push(fn);
    }

    notificate() {
        this._observers.forEach(fn => fn(this.categories));
    }

    addCategory(category) {
        this.categories.push(category);
        this.notificate();
    }
}
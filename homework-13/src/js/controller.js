import * as auxiliary from './auxiliary/auxiliary';

import headerTpl from '../html/header.hbs';
export default class Controller {
    constructor(view, model) {
        this._view = view;
        this._model = model;

        this._view.refs.form.addEventListener('click', this.adding.bind(this));
        this._view.refs.cards.addEventListener('click', this._model.deleating.bind(this));
        this._view.refs.clear.addEventListener('click', this._model.clearStorage.bind(this));

        this.init();
    }

    init() {
        if (auxiliary.LOCALSTORAGE.isActive && localStorage.getItem("urls") !== null && localStorage.getItem("urls").length > 1) {
            const arr = (localStorage.getItem("urls").split('!-!'));
            arr.forEach((item) => this._view.addingMarkup(headerTpl(JSON.parse(item))))
        }
    }

    adding(e) {
        const target = e.target;
        if (target.nodeName == 'BUTTON') this._model.add(e, this._view.refs.url);
    }

}
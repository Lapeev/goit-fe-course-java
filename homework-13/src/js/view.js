export default class View {
    constructor() {
        this.refs = {};

        this.refs.url = document.querySelector('.form__input');
        this.refs.cards = document.querySelector('.cards-js');
        this.refs.form = document.querySelector('.form');
        this.refs.clear = document.querySelector('.button__clear-storage');
        this.refs.cardURLS = document.querySelectorAll('.card__url');

    }
    addingMarkup(markUp) {
        this.refs.cards.insertAdjacentHTML('afterbegin', markUp);
    }
    delNode(target) {
        target.parentNode.remove();
    }

    delAll() {
        this.refs.cards.innerHTML = '';
    }
}
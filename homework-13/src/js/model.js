import * as auxiliary from './auxiliary/auxiliary';

import headerTpl from '../html/header.hbs';
export default class Model {
    constructor(view) {
        this._view = view;
    }



    add(e, url) {
        e.preventDefault();
        if (this.link(url) && !this.alredyIn(url)) {
            const data = {
                key: '5bf2d1ec4b50cca78c4487af4257616699a353ccaf296',
                q: url.value
            }
            fetch('https://api.linkpreview.net', {
                    method: 'POST',
                    mode: 'cors',
                    body: JSON.stringify(data),
                })
                .then(res => {
                    if (res.status == 200) {                        
                        auxiliary.clearForm(this._view.refs.url);
                        return res.json();
                    }
                    throw new Error(`Error while fetching: ${res.statusText}`);
                })
                .then(response => {
                    if (auxiliary.LOCALSTORAGE.isActive) {
                        this.setLocalStorage(response);
                    }
                    this._view.addingMarkup(headerTpl(response));
                })
                .catch(err => console.log(err))
        } else return;
    }

    alredyIn(url) {
        const allURLs = Array.from(document.querySelectorAll('.card__url')).reduce((acc, el) => acc.concat(el.href), []);
        if (allURLs.includes(url.value)) {
            auxiliary.clearForm(this._view.refs.url);
            alert('Такая закладка уже есть в списке');
        }
        return allURLs.includes(url.value);
    }

    link(url) {
        const expr = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i;
        if (!expr.test(url.value)) {
            auxiliary.clearForm(this._view.refs.url);
            alert('Вы ввели невалидный URL');
        }
        return expr.test(url.value);
    }

    deleating(e) {
        const target = e.target;
        if (target.nodeName == 'BUTTON') {
            e.preventDefault();
            if (auxiliary.LOCALSTORAGE.isActive) {
                const reg = /!-!/;
                const arr = localStorage.getItem("urls").split(reg);
                const arrJSON = arr.map(el => JSON.parse(el));
                const newArrJSON = arrJSON.filter(elem => elem.url !== target.parentNode.children[3].href);
                const newArr = newArrJSON.map(el => JSON.stringify(el));
                localStorage.setItem('urls', `${(newArr.join('!-!')).trim()}`);  
            }
            this._view.delNode(target);
        }
    }

    clearStorage(e) {
        e.preventDefault();
        auxiliary.clearForm(this._view.refs.url);
        this._view.delAll();
        localStorage.clear();
    }


    setLocalStorage(response) {
        if (localStorage.getItem("urls") == null)
        localStorage.setItem('urls', `${JSON.stringify(response)}`);
        if (!localStorage.getItem('urls').includes(JSON.stringify(response)))
            localStorage.setItem('urls', `${localStorage.getItem("urls")}!-!${JSON.stringify(response)}`);
    }
}
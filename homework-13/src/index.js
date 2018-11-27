import './scss/style.scss';
import Model from './js/model';
import View from './js/view';
import Controller from './js/controller';
const view = new View();
const model = new Model(view);
new Controller(view, model);
// new Controller(view, model);


// const url = document.querySelector('.form__input');
// const form = document.querySelector('.form');
// const cards = document.querySelector('.cards-js');
// const clear = document.querySelector('.button__clear-storage');

// const LOCALSTORAGE = (w => {
//   if (!w) return;

//   const isActive = "localStorage" in w;

//   const publicAPI = {
//     isActive
//   };

//   return publicAPI;
// })(window);

// (function () {
//   if (LOCALSTORAGE.isActive && localStorage.getItem("urls") !== null && localStorage.getItem("urls").length > 1) {
//     const arr = (localStorage.getItem("urls").split(' ')).reverse();
//     arr.forEach((item) => {
//       const data = {
//         key: '5bf2d1ec4b50cca78c4487af4257616699a353ccaf296',
//         q: item
//       }
//       fetch('https://api.linkpreview.net', {
//           method: 'POST',
//           mode: 'cors',
//           body: JSON.stringify(data),
//         })
//         .then(res => res.json())
//         .then(response => addingMarkup(buildDOM(response)))
//         .catch(err => console.log(err))
//     })
//   }
// }())

// form.addEventListener('click', adding);
// cards.addEventListener('click', deleating);
// clear.addEventListener('click', clearStorage);

// function adding(e) {
//   const target = e.target;
//   if (target.nodeName == 'BUTTON') add(e);
// }

// function add(e) {
//   e.preventDefault();
//   if (link(url) && !alredyIn(url)) {
//     const data = {
//       key: '5bf2d1ec4b50cca78c4487af4257616699a353ccaf296',
//       q: url.value
//     }
//     fetch('https://api.linkpreview.net', {
//         method: 'POST',
//         mode: 'cors',
//         body: JSON.stringify(data),
//       })
//       .then(res => {
//         if (res.status == 200) {
//           if (LOCALSTORAGE.isActive) {
//             setLocalStorage(url.value);
//           }
//           clearForm();
//           return res.json();
//         }
//         throw new Error(`Error while fetching: ${res.statusText}`);
//       })
//       .then(response => addingMarkup(buildDOM(response)))
//       .catch(err => console.log(err))
//   } else return;
// }

// function buildDOM(response) {
//   const markUp = headerTpl(response);
//   return markUp;
// }

// function addingMarkup(markUp) {
//   cards.insertAdjacentHTML('afterbegin', markUp);
// }

// function alredyIn(url) {
//   const allURLs = Array.from(document.querySelectorAll('.card__url')).reduce((acc, el) => acc.concat(el.href), []);
//   if (allURLs.includes(url.value)) {
//     clearForm();
//     alert('Такая закладка уже есть в списке');
//   }
//   return allURLs.includes(url.value);
// }

// function link(url) {
//   const expr = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i;
//   if (!expr.test(url.value)) {
//     clearForm();
//     alert('Вы ввели невалидный URL');
//   }
//   return expr.test(url.value);
// }

// function deleating(e) {
//   const target = e.target;
//   if (target.nodeName == 'BUTTON') {
//     e.preventDefault();
//     deleateFromStorage(target.parentNode.children[3].href);
//     target.parentNode.remove();
//   }
// }

// function setLocalStorage(url) {
//   if (localStorage.getItem("urls") == null)
//     localStorage.setItem('urls', `${url}`);
//   if (!localStorage.getItem('urls').includes(url))
//     localStorage.setItem('urls', `${localStorage.getItem("urls")} ${url}`);
// }

// function clearStorage(e) {
//   e.preventDefault();
//   localStorage.clear();
// }

// function deleateFromStorage(el) {
//   if (LOCALSTORAGE.isActive) {
//     const arr = localStorage.getItem("urls").split(' ');
//     const newArr = arr.filter(elem => elem !== el);
//     localStorage.setItem('urls', `${(newArr.join(' ')).trim()}`);
//   }
// }

// function clearForm() {
//   url.value = '';
// }
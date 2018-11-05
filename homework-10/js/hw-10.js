'use strict';

const getAll = document.querySelector('.button_get-all-users');
const tableGetAll = document.querySelector('.table_get-all-users');

const getUserById = document.querySelector('.button_user-by-id');
const inputUserById = document.querySelector('.input_user-by-id');
const tableUserById = document.querySelector('.table_user-by-id');

const addUser = document.querySelector('.button_add');
const inputNewName = document.querySelector('.input_add-user-name');
const inputNewAge = document.querySelector('.input_add-user-age');
const tableAddUser = document.querySelector('.table_add_user');

const delUser = document.querySelector('.button_del');
const delId = document.querySelector('.input_del-ID');
const delRes = document.querySelector('.result_del');

const upUser = document.querySelector('.button_up');
const upId = document.querySelector('.input_up-id');
const upName = document.querySelector('.input_up-name');
const upAge = document.querySelector('.input_up-age');
const tableUp = document.querySelector('.table_up');

getAll.addEventListener("click", getAllUsers);

getUserById.addEventListener('click', getById);

addUser.addEventListener('click', addNameAge);

delUser.addEventListener('click', deleateUser);

upUser.addEventListener('click', updateUser);

function getAllUsers(evt) {
    evt.preventDefault();
    fetch('https://test-users-api.herokuapp.com/users/')
        .then(response => response.json())
        .then(data => addingAll(data.data))
        .catch(error => console.log(error));
}

function getById(evt) {
    evt.preventDefault();
    fetch(`https://test-users-api.herokuapp.com/users/${inputUserById.value}`)
        .then(response => response.json())
        .then(data => addingById(data.data))
        .catch(error => console.log(error));
}

function addNameAge(evt) {
    evt.preventDefault();
    const post = {
        name: `${inputNewName.value}`,
        age: `${Number(inputNewAge.value)}`
    }
    fetch(`https://test-users-api.herokuapp.com/users/`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              }
        }).then(response => response.json())
        .then(data => addingNameAge(data.data))
        .catch(error => console.log(error));

}

function deleateUser(evt) {
    evt.preventDefault();
    fetch(`https://test-users-api.herokuapp.com/users/${delId.value}`, {
  method: 'DELETE'
}).then(response => respStatus(response.status))
.catch(error => console.log(error));

}

function updateUser(evt) {
    evt.preventDefault();
    const update = {
        name: `${inputNewName.value}`,
        age: `${Number(inputNewAge.value)}`
    }
    fetch(`https://test-users-api.herokuapp.com/users/${upId.value}`, {
            method: 'PUT',
            body: JSON.stringify(update),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then(response => response.json())
            .then(data => addingUpdate(data.data))
            .catch(error => console.log(error));
}

function addingAll(data) {
    tableGetAll.innerHTML = '';
    const HTMLString = data.reduce((acc, el) => acc += createTable(el), '')
    tableGetAll.insertAdjacentHTML('afterbegin', `${HTMLString}`);
}

function addingById(data) {
    tableUserById.innerHTML = '';
    const HTMLString = createTable(data);
    tableUserById.insertAdjacentHTML('afterbegin', `${HTMLString}`);
}

function addingNameAge(data) {
    tableAddUser.innerHTML = '';
    const HTMLString = createResponseTable(data);
    tableAddUser.insertAdjacentHTML('afterbegin', `${HTMLString}`);
}

function addingUpdate(data) {
    tableUp.innerHTML = '';
    const HTMLString = createTable(data);
    tableUp.insertAdjacentHTML('afterbegin', `${HTMLString}`);
}


function createTable({
    id,
    name,
    age
}) {
    return `
      <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${Number(age)}</td>
      </tr>
    `;
}

function createResponseTable({
    _id,
    name,
    age
}) {
    return `
      <tr>
        <td>${_id}</td>
        <td>${name}</td>
        <td>${Number(age)}</td>
      </tr>
    `;
}
function respStatus(status) {
    delRes.innerHTML = '';
    delRes.innerHTML = `${status}`;
}
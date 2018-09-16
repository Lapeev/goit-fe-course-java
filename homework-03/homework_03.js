'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  
  return  login.length >= 4 && login.length <= 16;
  
};

const isLoginUnique = function(allLogins, login) {
  
  return allLogins.includes(login);
  
  
};

const addLogin = function(login) {
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
    
  if (isLoginUnique(logins, login)) {
    return 'Такой логин уже используется!';    
  }
  
  logins.push(login);
  return 'Логин успешно добавлен!';
}

console.log(addLogin('Ajax'));
console.log(addLogin('robotGoogles'));
console.log(addLogin('Zod'));
console.log(addLogin('jqueryisextremelyfast'));
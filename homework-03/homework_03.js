'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  
  return  login.length >= 4 && login.length <= 16;
  
};

const isLoginUnique = function(allLogins, login) {
  
  return allLogins.includes(login);
  
  
};

const addLogin = function(login) {
  if (isLoginValid(login)) {
    
    if (!isLoginUnique(logins, login)) {
      logins.push(login);
      return 'Логин успешно добавлен!';
    }
    
    else {
      return 'Такой логин уже используется!';
    }
    
  }
  else {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  
  return result;
}

console.log(addLogin('Ajax'));
console.log(addLogin('robotGoogles'));
console.log(addLogin('Zod'));
console.log(addLogin('jqueryisextremelyfast'));
'use strict';
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  
  const valid = login.length >= 4 && login.length <= 16;
  
  return valid;
};

const isLoginUnique = function(allLogins, login) {
  
  const unique = allLogins.includes(login);
  
  return unique;
};

const addLogin = function(login) {
  let result;
  if (isLoginValid(login)) {
    
    if (!isLoginUnique(logins, login)) {
      logins.push(login);
      result = 'Логин успешно добавлен!';
    }
    
    else {
      result = 'Такой логин уже используется!';
    }
    
  }
  else {
    result = 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  
  return result;
}

console.log(addLogin('Ajax'));
console.log(addLogin('robotGoogles'));
console.log(addLogin('Zod'));
console.log(addLogin('jqueryisextremelyfast'));
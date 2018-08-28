'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const alertUser = 'Отменено пользователем!';
const alertDenied = 'Доступ запрещен!';
const alertWelcome = 'Добро пожаловать!';
const login = prompt('Введите логин');

if (login === null) {
  alert(alertUser);
} else if (login !== adminLogin) {
  alert(alertDenied);
} else {

  const pass = prompt('Введите пароль');
  
  if (pass === null) {
    alert(alertUser);
  }
  else if (pass !== adminPassword) {
    alert(alertDenied);
  }
  else {
    alert(alertWelcome);
  }
}

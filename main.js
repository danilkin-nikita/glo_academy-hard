'use strict';

const form = document.querySelector('.authorization'),
      inputName = document.getElementById('name'),
      inputLogin = document.getElementById('login'),
      inputPassword = document.getElementById('password'),
      registration = document.getElementById('registration'),
      authorization = document.getElementById('authorization'),
      exit = document.getElementById('exit'),
      hello = document.getElementById('hello');

const users = new Map(JSON.parse(localStorage.getItem('UsersList')));
     let activeUser = localStorage.getItem('activeUser');

const createElem = (item) => {
  const div = document.createElement('div');
  div.key = item.login;
  if (item.lastName) {
    div.insertAdjacentHTML('beforeend', `
                            <p>Имя: ${item.firstName} Фамилия: ${item.lastName}<br>
                            Зарегистрирован: ${item.regData}</p>
                            <button class="delete-user" type="button">Удалить</button>
  `);
  } else {
    div.insertAdjacentHTML('beforeend', `
                            <p>Имя: ${item.firstName}<br>
                            Зарегистрирован: ${item.regData}</p>
                            <button class="delete-user" type="button">Удалить</button>
  `);
  }

  document.body.append(div);
};

const deleteElem = (elem) => {
  users.forEach((item, i) => {
    if (item.login === elem.key) {
      users.delete(i);
    }
  });
  render();
};

const authorizationUser = () => {
  users.forEach((item) => {
    if (item.login === inputLogin.value && item.password === inputPassword.value) {
      activeUser = item.firstName;
    }
  });
  if (activeUser === '' || activeUser == "null") {
        alert('Пользователь не найден')
      }
  render();
};

const addUser = () => {
  let date = new Date();

  const newUser = {
    firstName: inputName.value.split(' ')[0],
    lastName: inputName.value.split(' ')[1],
    login: inputLogin.value,
    password: inputPassword.value,
    regData: date.toLocaleString()
  };
  users.set(newUser.login, newUser);
  render();
};

const exitUser = () => {
  localStorage.removeItem('activeUser');
  activeUser = '';
  render();
};

const addToStorage = () => {
    localStorage.setItem('UsersList', JSON.stringify([...users]));
    localStorage.setItem('activeUser', activeUser);
};

const render = () => {
  document.querySelectorAll('div').forEach(elem => elem.textContent = '');
  document.querySelectorAll('input').forEach(elem => elem.value = '');
  users.forEach(item => createElem(item));
  hello.textContent = `Привет ${activeUser}`;
  addToStorage();

  if (activeUser === '' || localStorage.getItem('activeUser') === "null") {
    authorization.style.display = 'block';
    exit.style.display = 'none';
    hello.textContent = 'Привет Аноним';
  } else {
    authorization.style.display = 'none';
    exit.style.display = 'block';
  }
};

const init = () => {
  document.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;

    if (target === registration) {
      if (inputLogin.value === '' || inputName.value === '' || inputPassword.value === '') {
        alert('Поля не должны быть пустыми!');
        return;
      }
      addUser();
    }
    if (target.matches('.delete-user')) {
      deleteElem(target.closest('div'));
    }

    if (target === authorization) {
      authorizationUser();
    }

    if (target === exit) {
      exitUser();
    }
  });

  document.addEventListener('input', event => {
    let target = event.target;

    if (target === inputName) {
        target.value = target.value.replace(/[^а-я ]$/msi, '');
    }
    if (target === inputLogin) {
        target.value = target.value.replace(/[^a-z0-9_.-]$/msi, '');
    }
    if (target === inputPassword) {
        target.value = target.value.replace(/^[а-яА-я ]$/msi, '');
    }
  });
  render();
};

init();





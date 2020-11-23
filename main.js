'use strict';

let lang = prompt('Укажите язык ru/en');
let namePerson = prompt('Укажите имя');

if (lang == 'ru'){
  console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
} else if (lang == 'en'){
  console.log('Mn, Ts, Wd, Th, Fr, St, Sn');
} else {
  console.log('Ошибка');
}

switch (lang){
  case 'ru':
    console.log('Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс');
    break;
  case 'en':
    console.log('Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn');
    break;
  default:
    console.log('Не верно');
}

let array = {
  'ru':['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  'en':['Mn', 'Ts', 'Wd', 'Th', 'Fr', 'St', 'Sn'],
};
console.log(array[lang]);

let position = (namePerson === 'Артем') ? 'Директор' :
               (namePerson === 'Максим') ? 'Преподаватель' :
               'Студент';
console.log(position);
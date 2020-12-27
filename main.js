'use strict';

const daysOfTheWeek = () => {
  let day = document.querySelectorAll(".day");

  let daysArr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

  for (let i = 0; i < daysArr.length; i++) {
    day[i].textContent = daysArr[i];
    if (i == 5 || i == 6) {
      day[i].style.fontStyle = 'italic';
    }
  }
  
  let today = (6 + new Date().getDay()) % 7;
  day[today].style.fontWeight = 'bold';
}; 

daysOfTheWeek();
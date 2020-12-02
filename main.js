'use strict';
function date_time1(){
  let current_datetime = new Date();
  let monthRu;
  let dayOfWeek;
  let timeOfDay;
  let year = current_datetime.getFullYear();
  let day = current_datetime.getDate();
  switch (day) {
    case 0: dayOfWeek="Понедельник"; break;
    case 1: dayOfWeek="Вторник"; break;
    case 2: dayOfWeek="Среда"; break;
    case 3: dayOfWeek="Четверг"; break;
    case 4: dayOfWeek="Пятница"; break;
    case 5: dayOfWeek="Суббота"; break;
    case 6: dayOfWeek="Воскресенье"; break;
  }
  let month = current_datetime.getMonth();
  switch (month) {
    case 0: monthRu="января"; break;
    case 1: monthRu="февраля"; break;
    case 2: monthRu="марта"; break;
    case 3: monthRu="апреля"; break;
    case 4: monthRu="мае"; break;
    case 5: monthRu="июня"; break;
    case 6: monthRu="июля"; break;
    case 7: monthRu="августа"; break;
    case 8: monthRu="сентября"; break;
    case 9: monthRu="октября"; break;
    case 10: monthRu="ноября"; break;
    case 11: monthRu="декабря"; break;
  }
  let hours = hoursFormat(current_datetime.getHours());
  let minutes = current_datetime.getMinutes();
  let seconds = current_datetime.getSeconds();

  function hoursFormat(value) {
    if (value == 1 || value == 21) {
      timeOfDay = 'час';
    } else if (value >= 2 && value <= 4 || value >= 22 && value <= 23) {
      timeOfDay = 'часа';
    } else {
      timeOfDay = 'часов';
    }
    return value;
  }

  return 'Сегодня '+dayOfWeek+', '+ day+' '+monthRu+' '+year+', '+hours+' '+timeOfDay+' '+minutes+' минут '+seconds+' секунд';
}

function zeroFirstFormat(value) {
  if (value < 10) {
    value = '0'+value;
  }
  return value;
}

function date_time2() {
  let current_datetime = new Date();
  let day = zeroFirstFormat(current_datetime.getDate());
  let month = zeroFirstFormat(current_datetime.getMonth()+1);
  let year = current_datetime.getFullYear();
  let hours = zeroFirstFormat(current_datetime.getHours());
  let minutes = zeroFirstFormat(current_datetime.getMinutes());
  let seconds = zeroFirstFormat(current_datetime.getSeconds());

  return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
}   

setInterval(function () {
  document.getElementById('time-block-var1').innerHTML = date_time1();
  document.getElementById('time-block-var2').innerHTML = date_time2();
}, 1000);
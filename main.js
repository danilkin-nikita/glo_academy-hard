'use strict';

let btnNewColor = document.getElementById('change'),
    color = document.getElementById('color');

let randomize = function() {
 let randomColor = '#' + (Math.random().toString(16)).substring(2,8).toUpperCase();
 btnNewColor.style.color = randomColor;
  document.body.style.background = randomColor;
  color.innerText = randomColor;
};

btnNewColor.addEventListener('click', randomize);

randomize();
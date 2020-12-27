'use strict';

let num = 266219;

let calculation = (num.toString().split('').reduce((res, item) => item * res, 1)) ** 3;
console.log(calculation);
'use strict';

function foo(test) {
 if (typeof test !== 'string'){
    console.log('Не строка');
  } else {
    test = test.trim();
    return test.length > 30 ? test.slice(0, 30) + '...' : test;
  }
};

console.log(foo(' Тест Тест Тест Тест Тест Тест Тест Тест Тест '));
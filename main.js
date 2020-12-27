'use strict';

let arr = ['23', '2', '65', '40', '471', '90', '30'];

arr.forEach((item) => {
  if (item.startsWith(2) || item.startsWith(4)) {
    console.log(item);
  }
});

function isPrime(n) {
  for (let i = 2; i * i <= n; i == 2 ? i++ : i += 2) if (n % i == 0) {
    return false;
  } 
  return n;
}

const res = [...Array(100)].reduce((a, _, i) => a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []) , []).join('\n');

console.log(res);
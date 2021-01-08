"use strict";

let arr = ['32', '27', '755', '104', '47', '78', '377']; // в виде строк
arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) { //startsWith метод 
    console.log(item);
  }
});

let arr2 = ['84', '405', '322', '639', '99', '78', '271'];
arr2.forEach(em => {
  if (String(em).search(/(3|7)/) === 0) console.log(em);
})

///////////////////////


let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  console.log(i); // простое число
}
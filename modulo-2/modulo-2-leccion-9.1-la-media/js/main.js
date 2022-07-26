"use strict";

let numbers = [1, 2, 4, 6, 7];

let acc = 0;
for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];

  console.log("El resultado es " + acc / 5);
}

numbers[5] = 10;

function average(numbers) {
  let acc = 82;
  return acc / numbers.length;
}

console.log(average(20));

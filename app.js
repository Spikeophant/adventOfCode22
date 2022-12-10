//import fs
const fs = require('fs');

//read ./inputFIles/dayOnePuzzleOne.txt into an array of Numbers
const inputArray = fs.readFileSync('./inputFIles/dayOnePuzzleOne.txt', 'utf8').split('\n');

//loop through array, breaking into new arrays on blank strings.
const elves = {};
let counter = 1;
let tmpArr = [];
for (const cals in inputArray) {
  if (inputArray[cals]!== '') {
    tmpArr.push(Number(inputArray[cals]));
  } else {
    elves[counter] = tmpArr;
    counter++;
    tmpArr = [];
  }
}

for (const elf in elves) {
  elves[elf] = elves[elf].reduce((tot, cur) => {
    return tot + cur;
  });
}

let maxCals = Object.keys(elves).reduce((t, c) => {
  if ( elves[c] > t ) {
    t = elves[c];
  }
  return t;
}, 0)

console.log(maxCals);
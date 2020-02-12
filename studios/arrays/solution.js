// String modification:
const input = require('readline-sync');
let str = "LaunchCode";

let numLetters = input.question('How many letters to shift? ');

if (numLetters <= str.length) {
  let newWord = str.slice(numLetters) + str.slice(0,numLetters);
  console.log(`'${str}' converts to '${newWord}'.`);
} else {
  console.log(`OOPS! Not enough characters in '${str}' to move ${numLetters}.`);
}

// Array and string conversion:
let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

console.log(protoArray1.split(',').reverse().join(','));
console.log(protoArray2.split(';').sort().join('-'));
console.log(protoArray3.split(' ').sort().reverse().join(' '));
console.log(protoArray4.split(', ').reverse().join(','));

// Bonus missions:
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

let foodArray = food.split(',').sort();
let equipmentArray = equipment.split(',').sort();
let petsArray = pets.split(',').sort();
let sleepArray = sleepAids.split(',').sort();

let cargoHold = [foodArray, equipmentArray, petsArray, sleepArray];
console.log(cargoHold);

let cabinetNumber = Number(input.question("Select a cabinet:"));
let item = input.question("Search for item: ");

if (cabinetNumber >=0 && cabinetNumber < cargoHold.length) {
  console.log(`The cabinet contains: ${cargoHold[cabinetNumber]}.`);
  if (cargoHold[cabinetNumber].includes(item.toLowerCase())) {
    console.log(`Cabinet '${cabinetNumber}' DOES contain ${item}.`);
  } else {
    console.log(`Cabinet '${cabinetNumber}' DOES NOT contain ${item}.`);
  }
} else {
  console.log("Invalid entry.");
}
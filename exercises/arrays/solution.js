// Create the array:
let practiceFile = [273.15];

// Exercise #1:
practiceFile.push(42);
console.log(practiceFile);
practiceFile.push('hello');
console.log(practiceFile);
practiceFile.push(false, -4.6, "87");
console.log(practiceFile);


// Exercise #2:
let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5] = 'space tether';
console.log(cargoHold);
console.log(cargoHold.pop());
console.log(cargoHold);
console.log(cargoHold.shift());
console.log(cargoHold);
cargoHold.push('20 meters');
cargoHold.unshift(1138);
console.log(cargoHold);
console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`)

cargoHold = [1138, 'space suits', 'parrot', 'instruction manual',
'meal packs', 'space tether', '20 meters'];

// Exercise #3:
cargoHold.splice(3,0,'keys');
console.log(cargoHold);
cargoHold.splice(cargoHold.indexOf('instruction manual'),1);
console.log(cargoHold);
cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);

// Exercise #4:
let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 
'parsnip'];

console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);
console.log(holdCabinet2.slice(0,2));
console.log(holdCabinet2);
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);

let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];
let cargoHold = "water,space suits,food,plasma sword,batteries";

// Exercise #5:
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));

console.log(cargoHold.split(',').sort().join(','));

// Exercise #6:
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

let table = [];
table.push(element1, element2, element26);
console.log(table);
console.log(table[1], table[1][1]);
console.log(table[0][2], table[1][0], table[2][1]);
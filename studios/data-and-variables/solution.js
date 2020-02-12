let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = '100%';
let weatherStatus = 'clear';

let lineSeparator = '-------------------------------------';

console.log(lineSeparator);
console.log('> LC04 LAUNCH CHECKLIST');
console.log(lineSeparator);
console.log('Date:', date);
console.log('Time:', time);

console.log(lineSeparator);
console.log('> ASTRONAUT INFO');
console.log(lineSeparator);
console.log('* count:', astronautCount);
console.log('* status:', astronautStatus);

console.log(lineSeparator);
console.log('> FUEL DATA');
console.log(lineSeparator);
console.log('* Fuel temp celsius:', fuelTempCelsius + '°C');
console.log('* Fuel level:', fuelLevel);

console.log(lineSeparator);
console.log('> MASS DATA');
console.log(lineSeparator);
console.log('* Crew mass:', crewMassKg, 'kg');
console.log('* Fuel mass:', fuelMassKg, 'kg');
console.log('* Shuttle mass:', shuttleMassKg, 'kg');
console.log('* Total mass:', totalMassKg, 'kg');

console.log(lineSeparator);
console.log('> FLIGHT PLAN');
console.log(lineSeparator);
console.log('* weather:', weatherStatus);

console.log(lineSeparator);
console.log('> OVERALL STATUS');
console.log(lineSeparator);
console.log('* Clear for takeoff: YES');
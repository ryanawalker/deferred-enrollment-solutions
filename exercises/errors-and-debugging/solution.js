// Syntax error on line 5 fixed.
let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// Syntax errors on lines 17 and 29 fixed.
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green'){
  console.log('Crew & computer cleared.');
  launchReady = true;
} else {
  console.log('WARNING: Crew or computer not ready!');
  launchReady = false;
}

if (launchReady) {
  console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
  console.log("Fed parrot...");
  console.log("Ignition...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}

// Runtime errors fixed in lines 38 & 51.
let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
  console.log("10, 9, 8...");
  console.log("Fed parrot...");
  console.log("6, 5, 4...");
  console.log("Ignition...");
  console.log("3, 2, 1...");
  console.log("Liftoff!");
} else {
  console.log("Launch scrubbed.");
}

// Logic errors fixed:
let crewReady = false;

if (fuelLevel >= 20000) {
  console.log('Fuel level cleared.');
  launchReady = true;
} else {
  console.log('WARNING: Insufficient fuel!');
  launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
  console.log('Crew & computer cleared.');
  crewReady = true;
} else {
  console.log('WARNING: Crew or computer not ready!');
  crewReady = false;
}

if (launchReady && crewReady) {
  console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
  console.log('Liftoff!');
} else {
  console.log('Launch scrubbed.');
}
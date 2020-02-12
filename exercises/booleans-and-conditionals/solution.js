//Part 1 variable declarations:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// Part 2 Answer: "engines are off" will be printed.

// Part 3 safety checks:
if (crewStatus) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed.");
}

// Part 4 prediction: Yes, the code blocks produce the same result.

// Part 5 fuel and engine checks:
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
  console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500){
  console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500){
  console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500){
  console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500){
  console.log("Fuel level above 25%. Engines good.");
} else {
  console.log("Fuel and engine status pending...");
}

// Part 6 command override:
let commandOverride = false;

if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride){
  console.log("Cleared to launch!");
} else {
  console.log("Launch scrubbed!");
}

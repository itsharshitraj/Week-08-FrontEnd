// Convert 42 inches to feet
const inches = 42;
const feet = inches / 12;
console.log("42 inches is:",feet,"feet");

//Convert Rectangular Plot (60ft x 40ft) to meters (1ft = 0.3048m)
let lengthFt=60;
let widthFt=40;
let meterPerFoot = 0.3048;

let lengthMeters = lengthFt*meterPerFoot;
let widthMeters= widthFt*meterPerFoot;

console.log("Plot Size in Meters:",lengthMeters,"x",widthMeters);

// Calculate area of 25 such plots in acres (1 acre = 4046.86 m²)
let areaSqMeters = lengthMeters * widthMeters;
let totalArea = areaSqMeters * 25;
let acres = totalArea / 4046.86;

console.log("Total area of 25 plots in acres:",acres);
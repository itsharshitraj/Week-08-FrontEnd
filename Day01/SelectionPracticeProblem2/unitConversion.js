const prompt = require("prompt-sync")();

console.log("Unit Conversion Options:");
console.log("1. Feet to Inch");
console.log("2. Inch to Feet");
console.log("3. Feet to Meter");
console.log("4. Meter to Feet");

let choice = parseInt(prompt("Enter your choice (1-4): "));
let value = parseFloat(prompt("Enter value to convert: "));

switch (choice) {
    case 1:
        console.log(`${value} feet = ${value * 12} inches`);
        break;
    case 2:
        console.log(`${value} inches = ${(value / 12).toFixed(2)} feet`);
        break;
    case 3:
        console.log(`${value} feet = ${(value * 0.3048).toFixed(2)} meters`);
        break;
    case 4:
        console.log(`${value} meters = ${(value / 0.3048).toFixed(2)} feet`);
        break;
    default:
        console.log("Invalid choice! Enter a number between 1 and 4.");
}
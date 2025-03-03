const prompt = require("prompt-sync")();

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(degC) {
    return (degC * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5/9;
}

console.log("Choose Conversion:");
console.log("1: Celsius to Fahrenheit");
console.log("2: Fahrenheit to Celsius");

let choice = parseInt(prompt("Enter choice (1 or 2): "));

switch (choice) {
    case 1:
        let degC = parseFloat(prompt("Enter temperature in Celsius: "));
        if (degC >= 0 && degC <= 100) {
            console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(degC).toFixed(2)}°F`);
        } else {
            console.log("Invalid input! Temperature must be between 0°C and 100°C.");
        }
        break;

    case 2:
        let degF = parseFloat(prompt("Enter temperature in Fahrenheit: "));
        if (degF >= 32 && degF <= 212) {
            console.log(`Temperature in Celsius: ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
        } else {
            console.log("Invalid input! Temperature must be between 32°F and 212°F.");
        }
        break;

    default:
        console.log("Invalid choice! Please enter 1 or 2.");
}

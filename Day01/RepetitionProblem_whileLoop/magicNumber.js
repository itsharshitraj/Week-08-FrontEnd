const prompt = require("prompt-sync")();

console.log("Think of a number between 1 and 100");
let low = 1, high = 100;
let found = false;

while (!found && low <= high) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/higher/lower): `).toLowerCase();

    if (response === "yes") {
        console.log(`Magic number found: ${mid}`);
        found = true;
    } else if (response === "higher") {
        low = mid + 1;
    } else if (response === "lower") {
        high = mid - 1;
    } else {
        console.log("Invalid input, please respond with 'yes', 'higher', or 'lower'.");
    }
}

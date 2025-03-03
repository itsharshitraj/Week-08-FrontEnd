const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number: "));
let isPrime = num > 1;

for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(num + (isPrime ? " is a Prime Number." : " is NOT a Prime Number."));

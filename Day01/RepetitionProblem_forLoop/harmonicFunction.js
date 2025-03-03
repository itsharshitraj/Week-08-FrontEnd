const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the value of n: "));

let harmonic = 0;
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log(`Harmonic Number H(${n}) = ${harmonic.toFixed(5)}`);

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Enter the value of n: "));

let power = 0;
while (power <= n && Math.pow(2, power) <= 256) {
    console.log(`2^${power} = ${Math.pow(2, power)}`);
    power++;
}

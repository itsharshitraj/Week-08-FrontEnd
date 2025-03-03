const prompt = require("prompt-sync")();

let num = parseInt(prompt("Enter a number: "));
console.log(`Prime factors of ${num} are:`);

for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
        console.log(i);
        num /= i;
    }
}
if (num > 1) console.log(num);

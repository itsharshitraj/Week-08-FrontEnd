const prompt = require("prompt-sync")();

let a = parseInt(prompt("Enter value of a: "));
let b = parseInt(prompt("Enter value of b: "));
let c = parseInt(prompt("Enter value of c: "));

let op1 = a+b*c;
let op2 = a%b+c;
let op3 = c+a/b;
let op4 = a*b+c;

console.log(`a + b * c = ${op1}`);
console.log(`a % b + c = ${op2}`);
console.log(`c + a / b = ${op3}`);
console.log(`a * b + c = ${op4}`);


let max = Math.max(op1, op2, op3, op4);
let min = Math.min(op1, op2, op3, op4);

console.log("Maximum value:", max);
console.log("Minimum value:", min);
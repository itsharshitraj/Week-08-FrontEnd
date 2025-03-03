// Generates 5 random 3 digit number

let num1 = Math.floor(Math.random() * 900) + 100;
let num2 = Math.floor(Math.random() * 900) + 100;
let num3 = Math.floor(Math.random() * 900) + 100;
let num4 = Math.floor(Math.random() * 900) + 100;
let num5 = Math.floor(Math.random() * 900) + 100;

console.log("Numbers: ",num1,num2,num3,num4,num5);

// find max min
let min = Math.min(num1, num2, num3, num4, num5);
let max = Math.max(num1, num2, num3, num4, num5);

console.log("Minimum Value: " + min);
console.log("Maximum Value: " + max);
const prompt =require("prompt-sync")();

let num = parseInt(prompt("Enter a single-digit number (0-9): "));
let numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

if (num >= 0 && num <= 9){
    console.log("In words:", numberWords[num]);
}else{
    console.log("Invalid input! Please enter a single-digit number.");
}
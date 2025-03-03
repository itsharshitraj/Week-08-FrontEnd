
const prompt = require("prompt-sync")();
let dayNumber = parseInt(prompt("Enter a Number (1-7) for Weekday: "));

let weekDays= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if(dayNumber>=1 && dayNumber <=7){
    console.log("Weekday:", weekDays[dayNumber-1]);
}else{
    console.log("Invalid input! Enter a number between 1 and 7");
}
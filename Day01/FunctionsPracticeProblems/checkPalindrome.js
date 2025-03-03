const prompt = require("prompt-sync")();

// Function to check if a number is a palindrome
function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;

    while (num > 0) {
        let digit = num % 10;
        reversedNum = reversedNum * 10 + digit;
        num = Math.floor(num / 10);
    }
    
    return originalNum === reversedNum;
}

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

if (isPalindrome(num1) && isPalindrome(num2)) {
    console.log(`${num1} and ${num2} are both Palindromes.`);
} else if (isPalindrome(num1)) {
    console.log(`${num1} is a Palindrome, but ${num2} is not.`);
} else if (isPalindrome(num2)) {
    console.log(`${num2} is a Palindrome, but ${num1} is not.`);
} else {
    console.log("Neither of the numbers are Palindromes.");
}

const prompt = require("prompt-sync")();

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    let reversedNum = 0;
    let temp = num;
    
    while (temp > 0) {
        let digit = temp % 10;
        reversedNum = reversedNum * 10 + digit;
        temp = Math.floor(temp / 10);
    }

    return reversedNum;
}

let num = parseInt(prompt("Enter a number: "));

if (isPrime(num)) {
    console.log(`${num} is Prime.`);
    let palindromeNum = getPalindrome(num);
    
    if (isPrime(palindromeNum)) {
        console.log(`Palindrome ${palindromeNum} is also Prime.`);
    } else {
        console.log(`Palindrome ${palindromeNum} is NOT Prime.`);
    }
} else {
    console.log(`${num} is NOT Prime.`);
}

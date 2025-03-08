// Function to find repeated digit numbers in the range 0-100
function findRepeatedDigitNumbers(range) {
    let result = [];
    for (let i = 0; i <= range; i++) {
        let str = i.toString();
        if (str.length === 2 && str[0] === str[1]) {
            result.push(i);
        }
    }
    return result;
}

console.log("Repeated digit numbers (0-100):", findRepeatedDigitNumbers(100));

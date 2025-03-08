// Function to generate 10 random 3-digit numbers
function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

// Function to find 2nd largest and 2nd smallest without sorting
function findSecondLargestSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generate random numbers
let randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Random Numbers:", randomNumbers);

// Find second largest and second smallest without sorting
let { secondLargest, secondSmallest } = findSecondLargestSmallest(randomNumbers);
console.log("2nd Largest (without sorting):", secondLargest);
console.log("2nd Smallest (without sorting):", secondSmallest);

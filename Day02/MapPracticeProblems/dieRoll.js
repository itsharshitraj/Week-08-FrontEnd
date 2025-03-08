function rollDie() {
    return Math.floor(Math.random() * 6) + 1; // Generates number between 1-6
}

function simulateDieRolls() {
    let rollCounts = new Map(); // Map to store frequency of each number
    
    // Initialize map with 0 counts for each die face (1-6)
    for (let i = 1; i <= 6; i++) {
        rollCounts.set(i, 0);
    }

    let maxReached = false;
    while (!maxReached) {
        let roll = rollDie();
        rollCounts.set(roll, rollCounts.get(roll) + 1); // Update count

        if (rollCounts.get(roll) === 10) { // Stop when any number reaches 10 times
            maxReached = true;
        }
    }

    console.log("Final Die Roll Counts:", rollCounts);

    // Find max and min occurring numbers
    let maxNum = [...rollCounts.entries()].reduce((a, b) => (a[1] > b[1] ? a : b));
    let minNum = [...rollCounts.entries()].reduce((a, b) => (a[1] < b[1] ? a : b));

    console.log("Number with Maximum Rolls:", maxNum);
    console.log("Number with Minimum Rolls:", minNum);
}

simulateDieRolls();

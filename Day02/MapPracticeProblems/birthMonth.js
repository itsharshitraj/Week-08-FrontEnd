function generateBirthMonths() {
    let birthMonths = new Map(); // Map to store month-wise count

    // Initialize map with empty arrays for each month (1-12)
    for (let i = 1; i <= 12; i++) {
        birthMonths.set(i, []);
    }

    // Generate birth months for 50 individuals
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; // Random month (1-12)
        birthMonths.get(month).push(`Person-${i}`);
    }

    // Print individuals grouped by birth month
    console.log("Individuals grouped by birth month:", birthMonths);
}

generateBirthMonths();

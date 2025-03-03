let money = 100, bets = 0, wins = 0;

while (money > 0 && money < 200) {
    bets++;
    let betResult = Math.random() < 0.5 ? "Win" : "Lose";

    if (betResult === "Win") {
        money++;
        wins++;
    } else {
        money--;
    }

    console.log(`Bet #${bets}: ${betResult} | Money: ₹${money}`);
}

console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);
console.log(money === 200 ? "Gambler reached ₹200 goal!" : "Gambler is broke!");

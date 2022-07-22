function solve(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());

    while (input[0] !== "Retire") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "Fire") {
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);
            if (index >= 0 && index < warShip.length) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        } else if (command == "Defend") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);
            if (startIndex >= 0 && endIndex < pirateShip.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        } else if (command == "Repair") {
            let index = Number(tokens[1]);
            let health = Number(tokens[2]);
            if (index >= 0 && index < pirateShip.length) {
                pirateShip[index] += health;
                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }
        } else if (command == "Status") {
            let count = 0;
            let hpLine = maxHealth * 0.20;
            for (let section of pirateShip) {
                if (section < hpLine) {
                    count++;
                }
            }
            console.log(`${count} sections need repair.`);
        }
    }
    let pirateShipSum = 0
    let warShipSum = 0
    for (let section of pirateShip) {
        pirateShipSum += section;
    }
    for (let section of warShip) {
        warShipSum += section;
    }
    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warShipSum}`);
};

solve(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);
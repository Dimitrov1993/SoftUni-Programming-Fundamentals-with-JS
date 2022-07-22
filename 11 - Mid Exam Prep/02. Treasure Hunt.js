function solve(input) {
    let loot = input.shift().split("|");

    while (input[0] !== "Yohoho!") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "Loot") {
            for (let i = 1; i < tokens.length; i++) {
                let item = tokens[i];
                if (loot.includes(item) == false) {
                    loot.unshift(item);
                }
            }
        } else if (command == "Drop") {
            let index = Number(tokens[1]);
            if (index >= 0 && index < loot.length) {
                item = loot.splice(index, 1);
                loot.push(item[0]);
            }
        } else if (command == "Steal") {
            let count = Number(tokens[1]);
            let stealItems = [];
            for (let i = 0; i < count; i++) {
                if (loot.length === 0) {
                    break;
                }
                let stealItem = loot.pop();
                stealItems.unshift(stealItem);
            }
            console.log(stealItems.join(", "));
        }
    }
    if (loot.length > 0) {
        let totalSum = 0;
        for (let item of loot) {
            totalSum += item.length;
        }
        let avgGain = totalSum / loot.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
};

solve(["Diamonds|Silver|Shotgun|Gold",  
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 7",
    "Yohoho!"]);
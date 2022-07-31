function solve(input) {
    let num = Number(input.shift());
    let result = {};

    for (let i = 0; i < num; i++) {
        let [name, rarity] = input.shift().split("<->");
        result[name] = {
            rarity: Number(rarity),
            ratings: [],
            avgRating: 0
        };
    }
    while (input[0] !== "Exhibition") {
        let [command, tokens] = input.shift().split(": ");
        tokens = tokens.split(" - ");
        let name = tokens[0];
        let number = Number(tokens[1]);

        if (command == "Rate") {
            if (result.hasOwnProperty(name)) {
                result[name].ratings.push(number);
                let total = 0;
                for (let rating of result[name].ratings) {
                    total += rating;
                }
                result[name].avgRating = total / result[name].ratings.length;
            } else {
                console.log("error");
            }
        } else if (command == "Update") {
            if (result.hasOwnProperty(name)) {
                result[name].rarity = number;
            } else {
                console.log("error");
            }
        } else if (command == "Reset") {
            if (result.hasOwnProperty(name)) {
                result[name].ratings.length = 0;
                result[name].avgRating = 0;
            } else {
                console.log("error");
            }
        }
    }
    console.log("Plants for the exhibition:");
    let catalog = Object.entries(result);
    for (let [name, plant] of catalog) {
        console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
    }
};

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
function solve(input) {
    let cities = {};
    let counter = 0;
    while (input[0] !== "Sail") {
        let [name, population, gold] = input.shift().split("||");
        if (cities.hasOwnProperty(name)) {
            cities[name].population += Number(population);
            cities[name].gold += Number(gold);
        } else {
            cities[name] = {
                population: Number(population),
                gold: Number(gold),
            }
            counter++;
        }
    }
    let cut = input.shift()
    while (input[0] !== "End") {
        let tokens = input.shift().split("=>");
        let command = tokens[0];
        let name = tokens[1];

        if (command == "Plunder") {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            cities[name].population -= people;
            cities[name].gold -= gold;
            console.log(`${name} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[name].population <= 0 || cities[name].gold <= 0) {
                delete cities[name];
                counter--;
                console.log(`${name} has been wiped off the map!`);
            }
        } else if (command == "Prosper") {
            let gold = Number(tokens[2]);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                cities[name].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${name} now has ${cities[name].gold} gold.`);
            }
        }
    }
    if (Object.entries(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${counter} wealthy settlements to go to:`);
        for (let [name, info] of Object.entries(cities)) {
            console.log(`${name} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
};

solve(["Nassau||95000||1000",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>10000=>1500",
    "Plunder=>Campeche=>150000=>6900",
    "Plunder=>Port Royal=>150000=>6900",
    "End"]);
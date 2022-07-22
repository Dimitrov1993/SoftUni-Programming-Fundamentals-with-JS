function solve(array) {
    let energy = Number(array.shift());
    let wonBattlesCounter = 0;
    let index = 0;
    while (array[index] !== "End of battle") {
        let distance = Number(array[index]);
        if ((energy - distance) < 0) {
            console.log(`Not enough energy! Game ends with ${wonBattlesCounter} won battles and ${energy} energy`);
            return;
        }
        energy -= distance;
        wonBattlesCounter++;
        if (wonBattlesCounter % 3 === 0) {
            energy += wonBattlesCounter;
        }
        index++;
    }
    console.log(`Won battles: ${wonBattlesCounter}. Energy left: ${energy}`);
};

solve(["200",
"54",
"14",
"28",
"13",
"End of battle"]);
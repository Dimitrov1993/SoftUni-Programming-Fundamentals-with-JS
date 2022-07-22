function train(wagons) {
    let newWagons = wagons.shift().split(" ").map(Number);
    let maxCapacity = Number(wagons.shift());
    for (let commmand of wagons) {
        let currCommand = commmand.split(" ");
        if (currCommand[0] === "Add") {
            newWagons.push(Number(currCommand[1]));
        } else {
            for (let i = 0; i < newWagons.length; i++) {
                if (newWagons[i] + Number(currCommand[0]) <= maxCapacity) {
                    newWagons[i] += Number(currCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(newWagons.join(" "));
};

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
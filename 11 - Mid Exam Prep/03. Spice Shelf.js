function solve(input) {
    let result = input.shift().split(", ");

    while (input[0] !== "done") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "AddSpice") {
            if (result.includes(tokens[1]) == false) {
                result.push(tokens[1]);
            }
        } else if (command == "AddManySpices") {
            let index = Number(tokens[1]);
            let spices = tokens[2].split("|");
            for (let i = spices.length - 1; i >= 0; i--) {
                result.splice(index, 0, spices[i])
            }
        } else if (command == "SwapSpices") {
            let spiceOne = tokens[1];
            let spiceTwo = tokens[2];
            if (result.includes(spiceOne) && result.includes(spiceTwo)) {
                let indexOfSpliceOne = result.indexOf(spiceOne);
                let indexOfSpliceTwo = result.indexOf(spiceTwo);
                result.splice(indexOfSpliceOne, 1, spiceTwo);
                result.splice(indexOfSpliceTwo, 1, spiceOne);
            }
        } else if (command == "ThrowAwaySpices") {
            let spice = tokens[1];
            let spicesToRemove = Number(tokens[2]);
            let indexOfSpice = result.indexOf(spice);
            if (result.includes(spice)) {
                result.splice(indexOfSpice, spicesToRemove);
            }
        } else if (command == "Arrange") {
            result.sort((a, b) => a.localeCompare(b));
        }
    }
    console.log(result.join(" "));
};

solve([
    'coriander, cloves, paprika, cumin',
    'AddSpice nutmeg',
    'AddSpice anise',
    'AddSpice turmeric',
    'AddSpice cumin',
    'SwapSpices coriander paprika',
    'ThrowAwaySpices cumin 4',
    'done'
]);  
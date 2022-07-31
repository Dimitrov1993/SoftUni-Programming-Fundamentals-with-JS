function solve(input) {
    let result = input.shift();

    while (input[0] !== "Travel") {
        let tokens = input.shift().split(":")
        let command = tokens[0];

        if (command === "Add Stop") {
            let startIndex = Number(tokens[1]);
            let string = tokens[2];
            if (startIndex >= 0 && startIndex < result.length) {
                let left = result.substring(0, startIndex);
                let right = result.substring(startIndex)
                result = left + string + right;
            }
            console.log(result);
        } else if (command === "Remove Stop") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && endIndex < result.length) {
                let left = result.substring(0, startIndex);
                let right = result.substring(endIndex + 1)
                result = left + right;
            }
            console.log(result);
        } else if (command === "Switch") {
            result = result.split(tokens[1]).join(tokens[2]);
            console.log(result);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${result}`);
};

solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);
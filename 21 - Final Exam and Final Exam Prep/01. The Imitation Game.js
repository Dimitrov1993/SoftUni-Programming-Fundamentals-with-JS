function solve(input) {
    let message = input.shift();
    let i = 0;

    while (input[i] !== "Decode") {
        let tokens = input[i].split("|");
        let command = tokens[0];
        if (command == "Move") {
            let numOfLetters = Number(tokens[1]);
            let left = message.substring(0, numOfLetters);
            let right = message.substring(numOfLetters);
            message = right + left;
        } else if (command == "Insert") {
            let index = Number(tokens[1]);
            let left = message.substring(0, index);
            let right = message.substring(index);
            message = left + tokens[2] + right;
        } else if (command == "ChangeAll") {
            message = message.split(tokens[1]).join(tokens[2]);
        }
        i++;
    }
    console.log(`The decrypted message is: ${message}`);
};

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);
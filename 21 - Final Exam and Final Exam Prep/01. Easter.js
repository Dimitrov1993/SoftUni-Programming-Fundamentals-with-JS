function solve(input) {
    let result = input.shift();

    while (input[0] !== "Easter") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "Replace") {
            let currChar = tokens[1];
            let newChar = tokens[2];
            if (result.includes(currChar)) {
                result = result.split(currChar).join(newChar);
            }
            console.log(result);
        } else if (command == "Remove") {
            let substring = tokens[1];
            if (result.includes(substring)) {
                let startIndex = result.indexOf(substring);
                let left = result.substring(0, startIndex);
                let right = result.substring(startIndex + substring.length);
                result = left + right;
            }
            console.log(result);
        } else if (command == "Includes") {
            let string = tokens[1];
            if (result.includes(string)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (command == "Change") {
            let command2 = tokens[1];
            if (command2 == "Upper") {
                result = result.toUpperCase();
                console.log(result);
            } else if (command2 == "Lower") {
                result = result.toLowerCase();
                console.log(result);
            }
        } else if (command == "Reverse") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if (startIndex >= 0 && endIndex < result.length) {
                let reversed = result.substring(startIndex, endIndex + 1);
                console.log(reversed.split("").reverse().join(""));
            }
        }
    }
};

solve(['Easterbscomming',
    'Replace b I',
    'Remove commIng',
    'Change Upper',
    'Reverse 0 5',
    'Easter'])
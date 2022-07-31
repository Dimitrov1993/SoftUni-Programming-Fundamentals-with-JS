function solve(input) {
    let text = input.shift();
    let newText = "";
    while (input[0] !== "Done") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "TakeOdd") {
            for (let i = 0; i < text.length; i++) {
                if (i % 2 !== 0) {
                    newText += text[i];
                }
            }
            text = newText;
            console.log(text);
        } else if (command == "Cut") {
            let startIndex = Number(tokens[1]);
            let length = Number(tokens[2]);
            let left = text.substring(0, startIndex);
            let right = text.substring(startIndex + length);
            text = left + right;
            console.log(text);
        } else if (command == "Substitute") {
            if (text.includes(tokens[1])) {
                text = text.split(tokens[1]).join(tokens[2]);
                console.log(text);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }
    console.log(`Your password is: ${text}`);
};

solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
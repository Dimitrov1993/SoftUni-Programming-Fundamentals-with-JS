function solve(input) {
    let text = input.shift();

    while (input[0] !== "Generate") {
        let tokens = input.shift().split(">>>");
        let command = tokens[0];
        if (command == "Contains") {
            let word = tokens[1];
            if (text.includes(word)) {
                console.log(`${text} contains ${word}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command == "Flip") {
            let command2 = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let left = text.substring(0, startIndex);
            let right = text.substring(endIndex);
            let flip = text.substring(startIndex, endIndex);
            if (command2 == "Upper") {
                flip = flip.toUpperCase();
                text = left + flip + right;
            } else if (command2 == "Lower") {
                flip = flip.toLowerCase();
                text = left + flip + right;
            }
            console.log(text)
        } else if (command == "Slice") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let left = text.substring(0, startIndex);
            let right = text.substring(endIndex);
            text = left + right;
            console.log(text)
        }
    }
    console.log(`Your activation key is: ${text}`);
};

solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
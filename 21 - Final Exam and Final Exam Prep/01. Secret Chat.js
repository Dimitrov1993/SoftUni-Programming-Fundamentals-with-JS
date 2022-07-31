function solve(input) {
    let result = input.shift();

    while (input[0] !== "Reveal") {
        let tokens = input.shift().split(":|:")
        let command = tokens[0];

        if (command == "InsertSpace") {
            let index = Number(tokens[1]);
            let left = result.substring(0, index);
            let right = result.substring(index);
            result = left + " " + right;
            console.log(result);
        } else if (command == "Reverse") {
            let word = tokens[1];
            if (result.includes(word)) {
                let wordReverse = word.split("").reverse().join("");
                let startIndex = result.indexOf(word);
                let left = result.substring(0, startIndex);
                let right = result.substring(startIndex + word.length)
                result = left + right + wordReverse;
                console.log(result);
            } else {
                console.log("error");
            }
        } else if (command == "ChangeAll") {
            result = result.split(tokens[1]).join(tokens[2]);
            console.log(result);
        }
    }
    console.log(`You have a new text message: ${result}`);
};

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);
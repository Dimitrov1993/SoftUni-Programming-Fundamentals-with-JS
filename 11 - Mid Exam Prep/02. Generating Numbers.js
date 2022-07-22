function sovle(input) {
    let result = input.shift().split(" ").map(Number);

    while (input[0] !== "END") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "add") {
            let tokensLength = tokens.length
            for (let i = 3; i < tokensLength; i++) {
                int = Number(tokens.pop())
                result.unshift(int);
            }
        } else if (command == "remove") {
            let command2 = tokens[1];
            if (command2 == "greater") {
                let value = Number(tokens[3]);
                result = result.filter(x => x <= value)
            } else if (command2 == "at") {
                let index = Number(tokens[3]);
                if (index >= 0 && index < result.length) {
                    result.splice(index, 1)
                }
            }
        } else if (command == "replace") {
            let value = Number(tokens[1]);
            let replacement = Number(tokens[2]);
            if (result.includes(value)) {
                let a = result.indexOf(value);
                result.splice(a, 1, replacement);
            }
        } else if (command == "find") {
            let command2 = tokens[1];
            if (command2 == "even") {
                let evenReuslt = result.filter(x => x % 2 === 0);
                console.log(evenReuslt.join(" "));
            } else if (command2 == "odd") {
                let oddReuslt = result.filter(x => x % 2 === 1);
                console.log(oddReuslt.join(" "));
            }
        }
    }
    console.log(result.join(", "));
};

sovle(["1 2 3 10 10 6 4 10",
"replace 10 1",
"remove at index 0",
"add to start 4 2",
"END"])

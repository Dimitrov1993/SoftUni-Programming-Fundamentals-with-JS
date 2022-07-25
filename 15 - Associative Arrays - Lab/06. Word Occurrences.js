function solve(input) {
    let result = new Map();

    for (let line of input) {
        let [word, count] = line.split(",");

        if (result.has(word)) {
            let existing = result.get(word);
            result.set(word, existing + 1);
        } else {
            result.set(word, count = 1);
        }
    }
    let sorted = Array.from(result).sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
};

solve(["Here", "is", "the", "first", "sentence", "Here",
    "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"]);
function solve(word, text) {
    let words = text.split(" ");
    for (let w of words) {
        if (w.toLowerCase() === word) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
};

solve('python',
'JavaScript is the best programming language'
);
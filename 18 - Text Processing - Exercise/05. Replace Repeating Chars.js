function solve(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        currLetter = text[i];
        nextLetter = text[i + 1];
        if (currLetter !== nextLetter) {
            result += currLetter;
        }
    }
    console.log(result);
};

solve('aaaaabbbbbcdddeeeedssaa');
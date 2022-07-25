function solve(input) {
    let words = input.split(" ");
    let result = {};

    for (let word of words) {
        word = word.toLocaleLowerCase();
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }
    let output = [];

    for (let word in result) {
        if (result[word] % 2 == 1) {
            output.push(word);
        }
    }
    console.log(output.join(" "));

    // let filtered = Object
    //     .entries(result)
    //     .filter(([word, count]) => count % 2 == 1)
    //     .map(entry => entry[0])
    //     .join(" ");

    // console.log(filtered);
};

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
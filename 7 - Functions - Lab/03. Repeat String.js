function repeatString(string, repeats) {
    let result = "";
    for (let i = 0; i < repeats; i++) {
        result += string;
    }
    return result;
};

console.log(repeatString("abc", 3));
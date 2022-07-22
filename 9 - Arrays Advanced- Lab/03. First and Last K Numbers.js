function firstAndLastNums(arr) {
    let numOfElements = arr.shift();
    let first = arr.slice(0, numOfElements);
    let last = arr.slice(-numOfElements);
    console.log(first.join(" "));
    console.log(last.join(" "));
};

firstAndLastNums([2, 7, 8, 9]);
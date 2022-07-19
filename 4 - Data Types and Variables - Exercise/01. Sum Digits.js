function solve(num) {
    let sumOfDigits = 0;
    let numToString = String(num);
    for (i = 0; i < numToString.length; i++) {
        sumOfDigits += Number(numToString[i]);
    }
    console.log(sumOfDigits);
};

solve(245678);
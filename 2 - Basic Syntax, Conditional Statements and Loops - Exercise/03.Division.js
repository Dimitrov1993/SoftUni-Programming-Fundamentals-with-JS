function solve(num) {
    let result = 0

    if (num % 10 === 0) {
        result = 10;
        console.log(`The number is divisible by ${result}`);
    } else if (num % 7 === 0) {
        result = 7;
        console.log(`The number is divisible by ${result}`);
    } else if (num % 6 === 0) {
        result = 6;
        console.log(`The number is divisible by ${result}`);
    } else if (num % 3 === 0) {
        result = 3;
        console.log(`The number is divisible by ${result}`);
    } else if (num % 2 === 0) {
        result = 2;
        console.log(`The number is divisible by ${result}`);
    } else {
        console.log("Not divisible");
    }
};

solve(1643);
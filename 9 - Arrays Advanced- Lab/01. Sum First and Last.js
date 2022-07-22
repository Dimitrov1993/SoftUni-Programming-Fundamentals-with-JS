function sumFirstAndLast(arr) {
    let num1 = Number(arr.shift());
    let num2 = Number(arr.pop());
    let sum = num1 + num2;
    console.log(sum);
};

sumFirstAndLast(['20', '30', '40']);
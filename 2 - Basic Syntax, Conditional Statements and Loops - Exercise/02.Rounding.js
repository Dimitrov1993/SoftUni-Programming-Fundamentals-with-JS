function solve(num, precision) {

    if (precision > 15) {
        precision = 15;
    }

    let result = num.toFixed(precision);

    console.log(parseFloat(result));
};

solve(10.5, 3);
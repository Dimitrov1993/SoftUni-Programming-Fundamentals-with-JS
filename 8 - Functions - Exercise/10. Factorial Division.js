function factorialDivision(firstNumber, secondNumber) {
    function factorialCalculator(number) {
        let result = 1;
        while (number != 1) {
            result *= number;
            number -= 1;
        }
        return result;
    }
    let finalDivisionResult = factorialCalculator(firstNumber) / factorialCalculator(secondNumber);
    console.log(finalDivisionResult.toFixed(2));
};

factorialDivision(5, 2);
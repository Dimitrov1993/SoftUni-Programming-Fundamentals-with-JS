function addAndSubtract(num1, num2, num3) {
    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    let subtract = (addResult, thirdNumber) => addResult - thirdNumber;
    let result = add(num1, num2);
    let finaleResult = subtract(result, num3);
    console.log(finaleResult);
};

addAndSubtract(23, 6, 10);
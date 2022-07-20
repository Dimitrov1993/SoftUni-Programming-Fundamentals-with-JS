function oddAndEvenSum(number) {
    let numberAsText = number.toString();
    function totalOddSum(numAssString) {
        let oddSum = 0;
        for (let i = 0; i < numAssString.length; i++) {
            let currNum = Number(numAssString[i]);
            if (currNum % 2 !== 0) {
                oddSum += currNum;
            }
        }
        return oddSum;
    }
    function totalEvenSum(numAssText) {
        let evenSum = 0;
        for (let i = 0; i < numAssText.length; i++) {
            let currNum = Number(numAssText[i]);
            if (currNum % 2 === 0) {
                evenSum += currNum;
            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(numberAsText)}`);
};

oddAndEvenSum(1000435);
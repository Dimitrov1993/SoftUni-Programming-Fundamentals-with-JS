function numberSearch(array, input) {
    let numbersToTakeFromArr = input[0];
    let deleteNumsFromArr = input[1];
    let searchedNumber = input[2];

    let myNewArr = array.splice(0, numbersToTakeFromArr);
    myNewArr = myNewArr.splice(deleteNumsFromArr);
    let count = 0;
    for (let i = 0; i < myNewArr.length; i++) {
        if (myNewArr[i] === searchedNumber) {
            count++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${count} times.`);
};

numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]);
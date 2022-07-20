function magicSum(arr, num) {

    for (let i = 0; i < arr.length - 1; i++) {
        let currnetNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            let sum = currnetNum + nextNum;
            if (sum === num) {
                console.log(`${currnetNum} ${nextNum}`);
            }
        }
    }
};

magicSum([1, 2, 3, 4, 5, 6], 6);
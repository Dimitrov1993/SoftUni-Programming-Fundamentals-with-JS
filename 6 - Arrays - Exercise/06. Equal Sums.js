function equalSums(arr) {
    let hasEqaulSum = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }
        for (let r = i + 1; r < arr.length; r++) {
            rightSum += arr[r];
        }
        if (leftSum === rightSum) {
            console.log(i);
            hasEqaulSum = true;
        }
    }
    if (!hasEqaulSum) {
        console.log("no");
    }
};

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
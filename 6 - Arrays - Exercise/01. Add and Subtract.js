function subtract(arr) {
    let sum1 = 0;
    let sum2 = 0;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i])
        sum1 += arr[i];
        if (arr[i] % 2 == 0) {
            sum2 += arr[i] + i;
            newArr.push(arr[i] + i);
        } else {
            sum2 += arr[i] - i;
            newArr.push(arr[i] - i);
        }
    }
    console.log(newArr);
    console.log(sum1);
    console.log(sum2);
};

subtract([5, 15, 23, 56, 35]);
subtract([-5, 11, 3, 0, 2]);
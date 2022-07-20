function maxNumber(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isTopInteger = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum <= nextNum) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            newArr.push(currentNum);
        }
    }
    console.log(newArr.join(" "));
};

maxNumber([14, 24, 3, 19, 15, 17]);
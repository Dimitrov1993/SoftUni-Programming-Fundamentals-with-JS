function lastNumsSequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for (let element of lastK) {
            sum += element;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
};

lastNumsSequance(8, 2);
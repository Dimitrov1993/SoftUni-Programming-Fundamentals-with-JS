function processOddNums(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        if (i % 2 !== 0) {
            newArr.push(currNum * 2);
        }
    }
    console.log(newArr.reverse().join(" "));
};

processOddNums([10, 15, 20, 25]);

function process(arr) {
    let filtered = arr.filter((x, i) => i % 2 == 1);

    let doubled = filtered.map(x => x * 2);

    let result = doubled.reverse();

    console.log(result.join(" "));
};

process([10, 15, 20, 25]);
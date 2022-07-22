function solve(arrOfNumbers) {
    let allNumbers = arrOfNumbers.split(" ");
    let newNums = [];
    let sum = 0;
    for (let i = 0; i < allNumbers.length; i++) {
        let currNum = Number(allNumbers[i]);
        sum += currNum;
    }
    let avgNum = sum / allNumbers.length;
    for (let num of allNumbers) {
        if (num >= avgNum) {
            newNums.push(num);
        }
    }
    newNums.sort((a, b) => b - a);
    for (let num of newNums) {
        if (num <= avgNum) {
            console.log("No")
            return;
        }
    }
    console.log(newNums.splice(0, 5).join(" "));
};

solve('1');
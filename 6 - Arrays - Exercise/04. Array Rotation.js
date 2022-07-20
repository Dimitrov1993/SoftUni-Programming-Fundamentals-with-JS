function arrRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let currentNum = arr.shift();
        arr.push(currentNum);
    }
    console.log(arr.join(" "));
};

arrRotation([51, 47, 32, 61, 21], 2);
function matrix(num) {
    let newMatrix = [];
    for (let i = 0; i < num; i++) {
        newMatrix.push(num);
    }
    for (let j = 0; j < num; j++) {
        console.log(newMatrix.join(" "));
    }
};

matrix(3);
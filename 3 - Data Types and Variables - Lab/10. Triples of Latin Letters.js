function solve(num) {

    for (let i = 0; i < num; i++) {
        let first = String.fromCharCode(97 + i);

        for (let j = 0; j < num; j++) {
            let second = String.fromCharCode(97 + j);

            for (let y = 0; y < num; y++) {
                let third = String.fromCharCode(97 + y);
                console.log(first + second + third);
            }
        }
    }
};

solve(3);
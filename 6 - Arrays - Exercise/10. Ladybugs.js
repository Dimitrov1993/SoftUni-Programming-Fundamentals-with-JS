function solve(input) {
    let n = Number(input.shift());
    let ladybugIndexes = input.shift().split(" ").map(Number);
    let field = (new Array(n)).fill(0);

    for (let index of ladybugIndexes) {
        if (index >= 0 && index < field.length) {
            field[index] = 1;
        }
    }
    for (let command of input) {
        let tokens = command.split(" ");
        let startIndex = Number(tokens[0]);
        if (field[startIndex] == 1) {
            let direction = tokens[1];
            let offset = Number(tokens[2]);
            if (direction == "left") {
                offset *= -1;
            }
            let currIndex = startIndex + offset;
            field[startIndex] = 0;

            while (currIndex >= 0 && currIndex < n && field[currIndex] == 1) {
                currIndex += offset;
            }
            if (currIndex >= 0 && currIndex < n) {
                field[currIndex] = 1;
            }
        }
    }
    console.log(field.join(" "));
};

solve([3, '1',
    '0 right 1',
    '2 right 1']);
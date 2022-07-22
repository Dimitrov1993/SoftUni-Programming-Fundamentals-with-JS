function memoryGame(array) {
    let elements = array.shift().split(" ");
    let i = 0;
    let movesCounter = 0;
    while (array[i] !== "end") {
        let command = array[i].split(" ");
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);
        movesCounter++;
        if (index1 === index2 || index1 < 0 || index1 >= elements.length
            || index2 < 0 || index2 >= elements.length) {
            let numToSplit = elements.length / 2;
            elements.splice(numToSplit, 0, "-" + movesCounter + "a", "-" + movesCounter + "a");
            console.log("Invalid input! Adding additional elements to the board");
        } else if (elements[index1] === elements[index2]) {
            console.log(`Congrats! You have found matching elements - ${elements[index1]}!`);
            elements = elements.filter(el => el != elements[index1], elements[index2]);
        } else {
            console.log("Try again!");
        }
        if (elements.length === 0) {
            console.log(`You have won in ${movesCounter} turns!`);
            break;
        }
        i++;
    }
    if (array[i] === "end") {
        console.log(`Sorry you lose :(
${elements.join(" ")}`);
    }
};

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]);
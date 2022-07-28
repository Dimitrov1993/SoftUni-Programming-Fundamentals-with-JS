function solve(input) {
    let nameList = input.shift().split(", ");
    let finaleResult = {};

    for (let line of input) {
        if (line === "end of race") {
            break;
        }
        let namePattern = /[A-Z]+/gi;
        let currName = line.match(namePattern).join("");
        let distancePattern = /\d/g;
        let currDistance = line.match(distancePattern);
        let distance = 0;
        for (let dis of currDistance) {
            distance += Number(dis);
        }
        if (nameList.includes(currName)) {
            if (finaleResult.hasOwnProperty(currName)) {
                finaleResult[currName] += distance;
            } else {
                finaleResult[currName] = distance;
            }
        }
    }
    let sortedArray = Object.keys(finaleResult).sort((a, b) => finaleResult[b] - finaleResult[a]);
    console.log(`1st place: ${sortedArray[0]}`);
    console.log(`2nd place: ${sortedArray[1]}`);
    console.log(`3rd place: ${sortedArray[2]}`);
};

solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
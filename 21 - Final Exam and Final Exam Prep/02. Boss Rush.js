function solve(input) {
    let num = Number(input.shift());
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<job>[A-z]+ [A-z]+)#/g;

    for (let i = 0; i < num; i++) {
        let match = pattern.exec(input[i]);
        if (match !== null) {
            console.log(`${match.groups.name}, The ${match.groups.job}`);
            console.log(`>> Strength: ${match.groups.name.length}`);
            console.log(`>> Armor: ${match.groups.job.length}`);
            match = pattern.exec(input[i]);
        } else {
            console.log("Access denied!")
        }
    }
};

solve(['3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#']);
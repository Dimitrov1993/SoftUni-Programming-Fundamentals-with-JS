function solve(input) {
    let gladiators = {};

    while (input[0] !== "Ave Cesar") {
        if (input[0].includes(" vs ")) {
            let [gladiator1, gladiator2] = input.shift().split(" vs ");
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                let battleWin = false;
                for (let el1 of Object.entries(gladiators[gladiator1])) {
                    if (el1[0] !== "totalPoints") {
                        for (let el2 of Object.entries(gladiators[gladiator2])) {
                            if (el2[0] !== "totalPoints") {
                                if (el1[0] === el2[0]) {
                                    if (gladiators[gladiator1].totalPoints > gladiators[gladiator2].totalPoints) {
                                        delete gladiators[gladiator2];
                                        battleWin = true;
                                        break;
                                    } else if (gladiators[gladiator2].totalPoints > gladiators[gladiator1].totalPoints) {
                                        delete gladiators[gladiator1];
                                        battleWin = true;
                                        break;
                                    }
                                }
                            }
                        }
                        if (battleWin) {
                            break;
                        }
                    }
                }
            }
        } else {
            let [name, technique, points] = input.shift().split(" -> ");

            if (gladiators.hasOwnProperty(name) == false) {
                gladiators[name] = {
                    totalPoints: 0
                };
            }
            if (gladiators[name].hasOwnProperty(technique) == false) {
                gladiators[name][technique] = Number(points);
                gladiators[name].totalPoints += Number(points);
            }
            if (Number(points) > gladiators[name][technique]) {
                gladiators[name][technique] = Number(points);
            }
        }
    }
    let sorterdByTotalPoints = Object.entries(gladiators).sort((a, b) => b[1].totalPoints - a[1].totalPoints || a[0].localeCompare(b[0]));

    for (let [gladiator, info] of sorterdByTotalPoints) {
        console.log(`${gladiator}: ${info.totalPoints} skill`);
        let sorterdByTechnique = Object.entries(info).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        for (let technique of sorterdByTechnique) {
            if (technique[0] !== "totalPoints") {
                console.log(`- ${technique[0]} <!> ${technique[1]}`);
            }
        }
    }
};

solve([
    'Peter -> Duck -> 400',
    'Peter -> Duck -> 500',
    'Julius -> Shield -> 350',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Gladius vs Julius',
    'Peter vs Gladius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);
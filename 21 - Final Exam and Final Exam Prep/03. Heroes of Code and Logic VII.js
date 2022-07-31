function solve(input) {
    let n = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < n; i++) {
        let [name, hitPoints, manaPoints] = input.shift().split(" ")
        heroes[name] = {
            hitPoints: Number(hitPoints),
            manaPoints: Number(manaPoints)
        };
    }
    while (input[0] !== "End") {
        let tokens = input.shift().split(" - ");
        let command = tokens[0];
        let name = tokens[1];

        if (command == "CastSpell") {
            let manaNeeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (heroes[name].manaPoints >= manaNeeded) {
                heroes[name].manaPoints -= manaNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].manaPoints} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command == "TakeDamage") {
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            if (heroes[name].hitPoints - damage > 0) {
                heroes[name].hitPoints -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].hitPoints} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${attacker}!`);
            }
        } else if (command == "Recharge") {
            let amount = Number(tokens[2]);
            if ((heroes[name].manaPoints + amount) > 200) {
                amount = 200 - heroes[name].manaPoints;
                heroes[name].manaPoints = 200;
            } else {
                heroes[name].manaPoints += amount;
            }
            console.log(`${name} recharged for ${amount} MP!`);
        } else if (command == "Heal") {
            let amount = Number(tokens[2]);
            if ((heroes[name].hitPoints + amount) > 100) {
                amount = 100 - heroes[name].hitPoints;
                heroes[name].hitPoints = 100;
            } else {
                heroes[name].hitPoints += amount;
            }
            console.log(`${name} healed for ${amount} HP!`);
        }
    }
    for (let [name, stats] of Object.entries(heroes)) {
        console.log(`${name}
  HP: ${stats.hitPoints}
  MP: ${stats.manaPoints}`);
    }
};

solve(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
]);
function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let rooms = 0;
    let tokens = input.shift().split("|");
    for (let i = 0; i < tokens.length; i++) {
        let line = tokens[i].split(" ");
        let command = line[0];
        let num = Number(line[1]);

        if (command == "potion") {
            rooms++;
            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == "chest") {
            rooms++;
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            rooms++;
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${rooms}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
};

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
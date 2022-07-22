function solve(input) {
    let rooms = input.split("|");
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;

    for (let i = 0; i < rooms.length; i++) {
        let line = rooms[i].split(" ");

        let command = line[0];
        let amount = Number(line[1]);

        if (command == "potion") {

            if ((health + amount) > 100) {
                amount = 100 - health;
                health = 100;
            } else {
                health += amount;
            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);
            roomCounter++;
        } else if (command == "chest") {
            console.log(`You found ${amount} bitcoins.`);
            bitcoins += amount;
            roomCounter++;
        } else {
            roomCounter++;
            health -= amount;
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            } else {
                console.log(`You slayed ${command}.`);
            }
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
};

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
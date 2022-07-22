function experienceGaining(input) {
    let expNeeded = input.shift();
    let battlesCount = input.shift();
    let currExp = 0;
    let counter = 0;
    for (let i = 0; i < battlesCount; i++) {
        currExpFromBattle = input[i];
        counter++;
        if (counter % 3 === 0) {
            currExpFromBattle *= 1.15;
        }
        if (counter % 5 === 0) {
            currExpFromBattle *= 0.90;
        }
        if (counter % 15 === 0) {
            currExpFromBattle *= 1.05;
        }
        currExp += currExpFromBattle;
        if (currExp >= expNeeded) {
            break;
        }
    }
    if (currExp >= expNeeded) {
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(expNeeded - currExp).toFixed(2)} more needed.`);
    }
};

experienceGaining([500,
    5,
    50,
    300,
    200,
    300,
    20])    
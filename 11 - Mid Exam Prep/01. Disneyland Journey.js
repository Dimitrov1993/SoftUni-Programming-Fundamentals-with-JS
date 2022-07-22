function solve(input) {
    let juurneyCost = Number(input[0]);
    let NumOfMonths = Number(input[1]);
    let saveMoney = 0;
    let saveingsPerMonth = juurneyCost * 0.25;
    for (let i = 1; i <= NumOfMonths; i++) {
        if (i % 2 === 1) {
            saveMoney *= 0.84;
        }
        if (i % 4 === 0) {
            saveMoney *= 1.25;
        }
        saveMoney += saveingsPerMonth;
    }
    if (saveMoney >= juurneyCost) {
        console.log(`Bravo! You can go to Disneyland and you will have ${(saveMoney - juurneyCost).toFixed(2)}lv. for souvenirs.`);
    } else {
        console.log(`Sorry. You need ${(juurneyCost - saveMoney).toFixed(2)}lv. more.`);
    }
};

solve(["1000",
    "10"]);
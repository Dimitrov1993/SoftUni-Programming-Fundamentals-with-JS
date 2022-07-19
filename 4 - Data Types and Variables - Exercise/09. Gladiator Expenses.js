function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;

    for (let currentFight = 1; currentFight <= lostFightsCount; currentFight++) {
        if (currentFight % 2 == 0) {
            totalPrice += helmetPrice;
        }

        if (currentFight % 3 == 0) {
            totalPrice += swordPrice;
        }

        if (currentFight % 6 == 0) {
            totalPrice += shieldPrice;
        }

        if (currentFight % 12 == 0) {
            totalPrice += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
};

solve(7, 2, 3, 4, 5);
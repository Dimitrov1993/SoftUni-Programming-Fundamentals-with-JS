function guineaPig(input) {
    let foodInGrams = input[0] * 1000;
    let hayInGrams = input[1] * 1000;
    let coverInGrams = input[2] * 1000;
    let weightInGrams = input[3] * 1000;
    let days = 0;

    for (let i = 0; i < 30; i++) {
        days++;
        foodInGrams -= 300;
        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
        if (days % 2 === 0) {
            hayInGrams -= (foodInGrams * 0.05);
        }
        if (days % 3 === 0) {
            coverInGrams -= (weightInGrams / 3);
        }
    }
    let foodInKilograms = foodInGrams / 1000;
    let hayInKilograms = hayInGrams / 1000;
    let coverInKilograms = coverInGrams / 1000;

    console.log(`Everything is fine! Puppy is happy! Food: ${foodInKilograms.toFixed(2)}, Hay: ${hayInKilograms.toFixed(2)}, Cover: ${coverInKilograms.toFixed(2)}.`);
};

guineaPig(["9",
"5",
"5.2",
"1"]);
function solve(input) {
    let n = Number(input.shift());
    let cars = {};

    for (let i = 0; i < n; i++) {
        let [name, mileage, fuel] = input.shift().split("|")
        cars[name] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        };
    }
    while (input[0] !== "Stop") {
        let tokens = input.shift().split(" : ");
        let command = tokens[0];
        let name = tokens[1];

        if (command == "Drive") {
            let distance = Number(tokens[2]);
            let fuel = Number(tokens[3]);
            if (cars[name].fuel > fuel) {
                cars[name].mileage += distance;
                cars[name].fuel -= fuel;
                console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            } else {
                console.log("Not enough fuel to make that ride");
            }
            if (cars[name].mileage >= 100000) {
                delete cars[name];
                console.log(`Time to sell the ${name}!`);
            }
        } else if (command == "Refuel") {
            let fuel = Number(tokens[2]);
            if ((cars[name].fuel + fuel) > 75) {
                fuel = 75 - cars[name].fuel;
                cars[name].fuel = 75;
            } else {
                cars[name].fuel += fuel;
            }
            console.log(`${name} refueled with ${fuel} liters`);
        } else if (command == "Revert") {
            let kilometers = Number(tokens[2]);
            cars[name].mileage -= kilometers;
            if (cars[name].mileage < 10000) {
                cars[name].mileage = 10000;
            } else {
                console.log(`${name} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
    for (let [name, info] of Object.entries(cars)) {
        console.log(`${name} -> Mileage: ${info.mileage} kms, Fuel in the tank: ${info.fuel} lt.`);
    }
};

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);
function theLift(input) {
    let people = Number(input.shift());
    let wagons = input.shift().split(" ");


    for (let i = 0; i < wagons.length; i++) {
        let currWagon = Number(wagons[i]);
        let counter = currWagon;
        for (let j = currWagon; j < 4; j++) {
            if (people <= 0) {
                console.log(`The lift has empty spots! ${wagons.join(" ")}`);
                return;
            }
            counter++;
            people--;
            wagons[i] = counter;
        }
    }
    if (people === 0) {
        console.log(wagons.join(" "));
    }
    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue! ${wagons.join(" ")}`);
    }
};

theLift(["10", "0 2 0"]);
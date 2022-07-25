function solve(input) {
    let parkingLot = new Set();

    for (let line of input) {
        let [command, carNumber] = line.split(", ");

        if (command == "IN") {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    }
    if (parkingLot.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        let result = Array.from(parkingLot).sort();
        for (let car of result) {
            console.log(car);
        }
    }
};

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
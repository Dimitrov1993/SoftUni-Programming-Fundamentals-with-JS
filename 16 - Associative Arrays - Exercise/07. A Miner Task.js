function solve(input) {
    let result = new Map();

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (result.has(resource)) {
            let oldQuantity = result.get(resource);
            let newQuantity = oldQuantity + quantity;
            result.set(resource, newQuantity);
        } else {
            result.set(resource, quantity);
        }
    }
    for (let [resource, quantity] of result) {
        console.log(`${resource} -> ${quantity}`);
    }
};

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '15'
]);
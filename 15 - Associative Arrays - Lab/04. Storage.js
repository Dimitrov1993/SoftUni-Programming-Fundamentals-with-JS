function solve(input) {
    let result = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);

        if (!result.has(product)) {
            result.set(product, 0);
        }
        let existing = result.get(product);
        result.set(product, quantity + existing);
    }
    for (let [product, quantity] of result) {
        console.log(`${product} -> ${quantity}`);
    }
};

solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
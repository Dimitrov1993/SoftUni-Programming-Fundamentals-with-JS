function solve(input) {
    let catalogue = {};

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(" : ");
        let product = line[0];
        let price = line[1];
        catalogue[product] = price;
    }
    let sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    let currLetter = "";
    for (let [product, price] of sorted) {
        if (product[0] === currLetter) {
            console.log(`  ${product}: ${price}`)
        } else {
            currLetter = product[0];
            console.log(currLetter);
            console.log(`  ${product}: ${price}`);
        }
    }
};

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
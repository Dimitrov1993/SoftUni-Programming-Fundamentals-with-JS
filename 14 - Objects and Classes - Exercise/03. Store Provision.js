function storeProvision(arr1, arr2) {
    let storedProducts = {};
    for (let i = 0; i < arr1.length; i += 2) {
        let currProduct = arr1[i];
        storedProducts[currProduct] = Number(arr1[i + 1]);
    }
    for (let i = 0; i < arr2.length; i += 2) {
        let currProduct = arr2[i];
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(arr2[i + 1]);
    }
    for (let product of Object.keys(storedProducts)) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
};

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);
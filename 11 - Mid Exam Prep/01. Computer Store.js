function computerStore(input) {
    let totalPrice = 0;
    let command = input.pop();
    for (let i = 0; i < input.length; i++) {
        let price = Number(input[i]);
        if (price < 0) {
            console.log("Invalid price!");
        } else {
            totalPrice += price;
        }
    }
    if (totalPrice <= 0) {
        console.log("Invalid order!");
        return;
    }
    totalPricePlusTaxes = totalPrice * 1.20;
    let taxes = totalPricePlusTaxes - totalPrice;
    if (command === "regular") {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPrice.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPricePlusTaxes.toFixed(2)}$`);
    } else if (command === "special") {
        totalPricePlusTaxes *= 0.90;
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPrice.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPricePlusTaxes.toFixed(2)}$`);
    }
};

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);
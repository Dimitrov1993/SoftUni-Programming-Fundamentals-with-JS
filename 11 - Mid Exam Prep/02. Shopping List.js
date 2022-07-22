function solve(array) {
    let shoppingList = array.shift().split("!");

    while (array[0] !== "Go Shopping!") {
        let token = array.shift().split(" ");
        let currCommand = token[0];
        let product1 = token[1];
        let product2 = token[2];

        switch (currCommand) {
            case "Urgent":
                if (shoppingList.includes(product1) === false) {
                    shoppingList.unshift(product1);
                }
                break;
            case "Unnecessary":
                shoppingList = shoppingList.filter(product => product != product1);
                break;
            case "Correct":
                if (shoppingList.includes(product1) === true) {
                    shoppingList.splice(shoppingList.indexOf(product1), 1, product2);
                }
                break;
            case "Rearrange":
                if (shoppingList.includes(product1) === true) {
                    shoppingList.splice(shoppingList.indexOf(product1), 1);
                    shoppingList.push(product1);
                }
                break;
        }
    }
    console.log(shoppingList.join(", "));
};

solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);
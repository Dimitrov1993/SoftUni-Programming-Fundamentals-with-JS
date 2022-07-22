function solve(input) {
    let inventory = input.shift().split(", ");
    let i = 0;
    while (input[i] !== "Craft!") {
        let tokens = input[i].split(" - ");
        let command = tokens[0];
        let item = tokens[1];

        switch (command) {
            case "Collect":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item);
                    inventory.splice(indexOfItem, 1);
                }
                break;
            case "Combine Items":
                let items = item.split(":");
                let oldItem = items[0];
                let newItem = items[1];
                if (inventory.includes(oldItem)) {
                    let indexOfItem = inventory.indexOf(oldItem);
                    inventory.splice(indexOfItem + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (inventory.includes(item)) {
                    let indexOfItem = inventory.indexOf(item);
                    let currItem = item;
                    inventory.splice(indexOfItem, 1);
                    inventory.push(currItem);
                }
                break;
        }
        i++;
    }
    console.log(inventory.join(", "));
};

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);
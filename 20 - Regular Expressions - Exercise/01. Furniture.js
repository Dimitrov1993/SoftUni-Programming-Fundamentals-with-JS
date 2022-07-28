function solve(input) {
    
    let totalMoneySpend = 0;
    console.log("Bought furniture:");

    for (let line of input) {
        if (line === "Purchase") {
            break;
        }
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
        let result = pattern.exec(line);
        if (result) {
            totalMoneySpend += Number(result.groups.price) * Number(result.groups.quantity);
            console.log(result.groups.name);
        }
    }
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
};

solve(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
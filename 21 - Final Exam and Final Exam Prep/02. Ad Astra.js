function solve(input) {
    let pattern = /([#|])(?<foodName>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let match = pattern.exec(input);

    let result = [];
    let totalCalories = 0;

    while (match !== null) {
        let name = match[2];
        let date = match[3];
        let calories = Number(match[4]);
        totalCalories += calories
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
        match = pattern.exec(input);
    }

    let days = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    for (let line of result) {
        console.log(line);
    }
};

solve(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
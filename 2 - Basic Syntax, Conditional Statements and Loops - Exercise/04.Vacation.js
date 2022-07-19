function solve(groupNum, type, day) {

    let price = 0;

    switch (day) {
        case "Friday":
            switch (type) {
                case "Students": price = 8.45; break;
                case "Business": price = 10.90; break;
                case "Regular": price = 15; break;
            }
            break;
        case "Saturday":
            switch (type) {
                case "Students": price = 9.80; break;
                case "Business": price = 15.60; break;
                case "Regular": price = 20; break;
            }
            break;
        case "Sunday":
            switch (type) {
                case "Students": price = 10.46; break;
                case "Business": price = 16; break;
                case "Regular": price = 22.50; break;
            }
            break;
    }
    let finalePrice = price * groupNum;

    if (type === "Students" && groupNum >= 30) {
        finalePrice = finalePrice * 0.85;
    } else if (type === "Business" && groupNum >= 100) {
        finalePrice = price * (groupNum - 10);
    } else if (type === "Regular" && groupNum >= 10 && groupNum <= 20) {
        finalePrice = finalePrice * 0.95;
    }
    console.log(`Total price: ${finalePrice.toFixed(2)}`);
};

solve(40, "Regular", "Saturday");
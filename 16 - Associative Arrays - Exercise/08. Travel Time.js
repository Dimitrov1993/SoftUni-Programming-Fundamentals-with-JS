function solve(input) {
    let result = {};

    for (let line of input) {
        let [countryName, townName, cost] = line.split(" > ");

        if (result[countryName]) {

            const hasLower = Number(result[countryName].get(townName)) < Number(cost);

            if (!hasLower) {
                result[countryName].set(townName, cost);
            }
        } else {
            result[countryName] = new Map();
            result[countryName].set(townName, cost);
        }
    }

    let byName = (a, b) => a[0].localeCompare(b[0]);

    let toObject = ([town, price]) => ({ town, price });

    let byPrice = (a, b) => a.price - b.price;

    let sortedByCountryName = Object.entries(result).sort(byName);

    for (let [countryName, townsMap] of sortedByCountryName) {
        let sortedTowns = [...townsMap].map(toObject).sort(byPrice);
        let townsWithPrices = Object.values(sortedTowns).map((obj) =>
            [obj.town, obj.price].join(" -> ")
        );
        console.log(`${countryName} -> ${townsWithPrices.join(" ")}`);
    }
};

solve([
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
]);
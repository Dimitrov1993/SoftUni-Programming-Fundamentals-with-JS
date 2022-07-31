function solve(input) {
    let pattern = /([=/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;
    let match = pattern.exec(input);
    let destinations = [];
    let travelPoints = 0;
    while (match !== null) {
        let dest = match.groups.destination;
        destinations.push(dest)
        travelPoints += dest.length;
        match = pattern.exec(input);
    }
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
};

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
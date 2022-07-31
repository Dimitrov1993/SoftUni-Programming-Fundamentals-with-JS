function solve(input) {
    let pattern = /(?<name>[A-Z][a-z]{2,} [A-Z][a-z]{2,})#+(?<job>([A-Z][a-z]+&?){0,3})[0-9]{2}(?<company>[A-Z][A-z0-9]+ (Ltd.|JSC))/g;
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {
        let result = pattern.exec(input[i]);
        if (result !== null) {
            console.log(`${result.groups.name} is ${result.groups.job.split("&").join(" ")} at ${result.groups.company}`);
        }
        result = pattern.exec(input[i]);
    }
};

solve(["2",
"Mariya Ivanova#Photographer&&Machine25PhotoStudio12 Ltd.",
"Monica Hristova####Nuclear&Engineer99Station JSC"])


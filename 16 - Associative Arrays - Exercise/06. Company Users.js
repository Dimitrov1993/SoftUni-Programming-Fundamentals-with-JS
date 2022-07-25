function solve(input) {
    let result = {}

    for (let line of input) {
        let tokens = line.split(" -> ");
        let companyName = tokens[0];
        let employeeId = tokens[1];
        if (result.hasOwnProperty(companyName) == false) {
            result[companyName] = new Set();
            result[companyName].add(employeeId)
        } else {
            result[companyName].add(employeeId);
        }
    }
    let sorted = Object.entries(result).sort();
    for (let [companyName, employeeId] of sorted) {
        console.log(companyName);
        for (let employee of employeeId) {
            console.log(`-- ${employee}`);
        }
    }
};

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
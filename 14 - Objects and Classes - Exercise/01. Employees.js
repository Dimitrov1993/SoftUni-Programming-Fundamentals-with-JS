function solve(array) {
    let employeesList = {};

    for (let employee of array) {
        employeesList.name = employee;
        employeesList.personalNumber = employee.length;
        console.log(`Name: ${employeesList.name} -- Personal Number: ${employeesList.personalNumber}`);
    }
};

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
function softUniReception(arr) {
    let students = Number(arr.pop());
    let allEmployeeEfficiency = 0;
    let timeNeed = 0;
    for (let i = 0; i < arr.length; i++) {
        let currEmployeeEfficiency = Number(arr[i])
        allEmployeeEfficiency += currEmployeeEfficiency;
    }
    while (students > 0) {
        students -= allEmployeeEfficiency;
        timeNeed++;
        if (timeNeed % 4 === 0) {
            timeNeed++;
        }
    }
    console.log(`Time needed: ${timeNeed}h.`)
};

softUniReception(['1', '2', '3', '45']);
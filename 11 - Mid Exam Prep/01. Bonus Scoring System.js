function solve(input) {
    let numOfStudents = Number(input.shift());
    let numOfLectures = Number(input.shift());
    let numOfAdditionalBonus = Number(input.shift());

    let maxBonus = 0;
    let lectures = 0;

    for (let i = 0; i < input.length; i++) {
        let studentResult = input[i] / numOfLectures * (5 + numOfAdditionalBonus);
        if (maxBonus < studentResult) {
            maxBonus = studentResult;
            lectures = input[i];
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${lectures} lectures.`);
};

solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);
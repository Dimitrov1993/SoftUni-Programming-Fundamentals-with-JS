function solve(input) {
    let index = 0;
    let userName = input[index];
    let password = userName.split("").reverse().join("");
    index++;
    let count = 0;

    while (input[index] !== password) {
        count++;
        if (count > 3) {
            console.log(`User ${userName} blocked!`);
            break;
        }
        console.log("Incorrect password. Try again.");
        index++;
    }
    if (input[index] === password) {
        console.log(`User ${userName} logged in.`);
    }

};

solve(['Acer','login','go','let me in','recA']);
function loadingBar(number) {
    let newNumber = number;
    let newLoadingBar = "";
    let char1 = "%";
    let char2 = "."
    for (let i = 0; i < 10; i++) {
        if (newNumber - 10 >= 0) {
            newNumber -= 10;
            newLoadingBar += char1;
        } else {
            newLoadingBar += char2;
        }
    }
    if (number >= 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${newLoadingBar}]`);
    } else {
        console.log(`${number}% [${newLoadingBar}]`);
        console.log("Still loading...");
    }
};

loadingBar(30);
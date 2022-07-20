function passwordValidator(password) {
    function isLengthEnough(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }

    function isOnlyLettersAndDigits(stringPassword) {
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0);
            if (!(currChar >= 48 && currChar <= 57) &&
                !(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122)) {
                return false;
            }
        }
        return true;
    }

    function isHavingAtleastTwoDigits(stringPassword) {
        let count = 0;
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt(0);
            if (currChar >= 48 && currChar <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }
    let isLengthValid = isLengthEnough(password);
    let isLettersAndDigirsOnly = isOnlyLettersAndDigits(password);
    let isContainigAtleastTwoDigits = isHavingAtleastTwoDigits(password);
    if (isLengthValid && isLettersAndDigirsOnly && isContainigAtleastTwoDigits) {
        console.log("Password is valid");
    }
    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLettersAndDigirsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isContainigAtleastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
};

passwordValidator('Pa$s$s');
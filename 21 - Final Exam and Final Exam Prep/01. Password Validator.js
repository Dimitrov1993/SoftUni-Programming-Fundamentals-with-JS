function solve(input) {
    let password = input.shift();
    let pattern1 = /[A-Za-z0-9_]/;
    let pattern2 = /[A-Z]/g;
    let pattern3 = /[a-z]/g;
    let pattern4 = /[0-9]/g

    while (input[0] !== "Complete") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "Make") {
            let command2 = tokens[1]
            let index = Number(tokens[2]);
            if (command2 == "Upper") {
                newChar = password.charAt(index).toUpperCase();
                let left = password.substring(0, index);
                let right = password.substring(index + 1);
                password = left + newChar + right;

            } else if (command2 == "Lower") {
                newChar = password.charAt(index).toLowerCase();
                let left = password.substring(0, index);
                let right = password.substring(index + 1);
                password = left + newChar + right;
            }
            console.log(password);
        } else if (command == "Insert") {
            let index = Number(tokens[1]);
            let char = tokens[2];
            if (index >= 0 && index < password.length) {
                let left = password.substring(0, index);
                let right = password.substring(index);
                password = left + char + right;
                console.log(password);
            }
        } else if (command == "Replace") {
            let char = tokens[1];
            let value = Number(tokens[2]);
            if (password.includes(char)) {
                let charValue = char.charCodeAt();
                charValue += value;
                // if (charValue >= 33 && charValue <= 125) {
                let newChar = String.fromCharCode(charValue);
                password = password.split(char).join(newChar);
                // }
                console.log(password);
            }
        } else if (command == "Validation") {
            if (password.length < 8) {
                console.log("Password must be at least 8 characters long!");
            }
            for (let i = 0; i < password.length; i++) {
                if (pattern1.exec(password[i]) == null) {
                    console.log("Password must consist only of letters, digits and _!");
                    break;
                }
            }
            if (pattern2.exec(password) == null) {
                console.log("Password must consist at least one uppercase letter!");
            }
            if (pattern3.exec(password) == null) {
                console.log("Password must consist at least one lowercase letter!");
            }
            if (pattern4.exec(password) == null) {
                console.log("Password must consist at least one digit!");
            }
        }
    }
};

solve(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete']);
function friendList(arr) {
    let usernames = arr.shift().split(", ");
    let blacklistedNamesCounter = 0;
    let lostNamesCounter = 0;
    let newUsernameLsit = [];

    for (let i = 0; i < arr.length; i++) {
        let [command, command2, command3] = arr[i].split(" ");

        switch (command) {
            case "Blacklist":
                blacklistedNamesCounter++;
                for (let name of usernames) {
                    if (name !== command2) {
                        newUsernameLsit.push(name);
                    } else {
                        console.log(`${command2} was blacklisted.`);
                        name = "Blacklisted";
                        newUsernameLsit.push(name);
                    }
                }
                if (usernames.includes(!command2)) {
                    console.log(`${command2} was not found.`);
                }
                break;
            case "Error":
                command2 = Number(command2);
                if (command2 >= 0 && command2 <= arr.length) {
                    if (newUsernameLsit[command2] !== "Blacklisted") {
                        lostNamesCounter++;
                        console.log(`${newUsernameLsit[command2]} was lost due to an error.`);
                        newUsernameLsit.splice(command2, 1, "Lost");
                    }
                }
                break;
            case "Change":
                command2 = Number(command2);
                if (command2 >= 0 && command2 <= arr.length) {
                    newUsernameLsit[command2] = command3;
                    console.log(`${newUsernameLsit[command2]} changed his username to ${command3}.`);
                }
                break;
            case "Report":
                console.log(`Blacklisted names: ${blacklistedNamesCounter}`);
                console.log(`Lost names: ${lostNamesCounter}`);
                console.log(newUsernameLsit.join(" "));
                break;
        }
    }
};

friendList(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"]);
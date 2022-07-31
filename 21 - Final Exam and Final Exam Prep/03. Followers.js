function solve(input) {
    let followers = 0;
    let result = {};

    while (input[0] !== "Log out") {
        let tokens = input.shift().split(": ");
        let command = tokens[0];
        let username = tokens[1];

        if (command == "New follower") {
            if (result.hasOwnProperty(username) == false) {
                result[username] = {
                    likes: 0,
                    comments: 0
                };
                followers++;
            }
        } else if (command == "Like") {
            let count = Number(tokens[2]);
            if (result.hasOwnProperty(username) == false) {
                result[username] = {
                    likes: count,
                    comments: 0
                };
                followers++;
            } else {
                result[username].likes += count;
            }
        } else if (command == "Comment") {
            if (result.hasOwnProperty(username) == false) {
                result[username] = {
                    likes: 0,
                    comments: 1
                };
                followers++;
            } else {
                result[username].comments += 1;
            }
        } else if (command == "Blocked") {
            if (result.hasOwnProperty(username)) {
                delete result[username];
                followers--;
            } else {
                console.log(`${username} doesn't exist.`);
            }
        }
    }
    console.log(`${followers} followers`);
    for (let [follower, info] of Object.entries(result)) {
        console.log(`${follower}: ${info.likes + info.comments}`);
    }
};

solve(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"]);
function solve(input) {
    let bands = {}
    let totalTime = 0;
    while (input[0] !== "Start!") {
        let tokens = input.shift().split("; ");
        let command = tokens[0];
        let bandName = tokens[1];
        if (command == "Play") {
            let time = Number(tokens[2]);
            totalTime += time;
            if (bands.hasOwnProperty(bandName)) {
                bands[bandName].time += time
            } else {
                bands[bandName] = {
                    members: [],
                    time: Number(time)
                }
            }
        } else if (command == "Add") {
            let currMembers = tokens[2].split(", ");
            if (bands.hasOwnProperty(bandName)) {
                for (let member of currMembers) {
                    if (bands[bandName].members.includes(member) == false) {
                        bands[bandName].members.push(member);
                    }
                }
            } else {
                bands[bandName] = {
                    members: [],
                    time: 0
                }
                for (let member of currMembers) {
                    bands[bandName].members.push(member);
                }
            }
        }
    }
    console.log(`Total time: ${totalTime}`);
    for (let [bandName, info] of Object.entries(bands)) {
        console.log(`${bandName} -> ${info.time}`);
    }
    for (let [bandName, info] of Object.entries(bands)) {
        console.log(bandName)
        let members = info.members;
        for (let member of members) {
            console.log(`=> ${member}`);
        }
        break;
    }
};

solve(["Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr",
    "Play; The Beatles; 4569",
    "Play; The Beatles; 2456",
    "Play; Queen; 1250",
    "Add; Queen; Freddie Mercury, Brian May, Roger Taylor, John Deacon",
    "Play; Queen; 6215",
    "Start!"])
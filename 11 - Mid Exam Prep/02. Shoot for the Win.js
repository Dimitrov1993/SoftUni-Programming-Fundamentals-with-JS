function solve(input) {
    let targetsSequence = input.shift().split(" ").map(Number);
    let shotTargetsCounter = 0;
    let index = 0;
    while (input[index] !== "End") {
        let indexToShoot = input[index];
        let shotPower = Number(targetsSequence[indexToShoot]);
        if (indexToShoot >= targetsSequence.length) {
            index++;
            continue;
        } else {
            targetsSequence.splice(indexToShoot, 1, -1);
            shotTargetsCounter++;
            for (let i = 0; i < targetsSequence.length; i++) {
                let target = targetsSequence[i];
                if (target != -1) {
                    if (target > shotPower) {
                        target -= shotPower;
                        targetsSequence.splice(i, 1, target);
                    } else {
                        target += shotPower;
                        targetsSequence.splice(i, 1, target);
                    }
                }
            }
        }
        index++;
    }
    console.log(`Shot targets: ${shotTargetsCounter} -> ${targetsSequence.join(" ")}`);
};

solve(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
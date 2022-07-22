function solve(input) {
    let targetsSequence = input.shift().split(" ").map(Number);
    let i = 0;
    while (input[i] !== "End") {
        let tokens = input[i].split(" ");
        let command = tokens[0];
        let index = Number(tokens[1]);
        let power = Number(tokens[2]);

        switch (command) {
            case "Shoot":
                if (index >= 0 && index < targetsSequence.length) {
                    let shootetTarget = Number(targetsSequence[index]);
                    let target = shootetTarget - power;
                    if (target <= 0) {
                        targetsSequence.splice(index, 1);
                    } else {
                        targetsSequence.splice(index, 1, target);
                    }
                }
                break;
            case "Add":
                if (index >= 0 && index < targetsSequence.length) {
                    targetsSequence.splice(index, 0, power);
                } else {
                    console.log("Invalid placement!");
                }
                break;
            case "Strike":
                let startExplosionIndex = index - power;
                let endExplosionIndex = index + power;
                let explosionLength = power * 2 + 1
                if (startExplosionIndex >= 0 && endExplosionIndex < targetsSequence.length) {
                    targetsSequence.splice(startExplosionIndex, explosionLength);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        i++;
    }
    console.log(targetsSequence.join("|"));
};

solve(["52 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 3 2",
    "Add 22 3",
    "End"]);
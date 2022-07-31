function solve(input) {
    let num = Number(input.shift());
    let catalog = {}

    for (let i = 0; i < num; i++) {
        let [name, composer, key] = input.shift().split("|");
        catalog[name] = {
            composer,
            key
        };
    }
    while (input[0] !== "Stop") {
        let tokens = input.shift().split("|");
        let command = tokens[0];
        let name = tokens[1];

        if (command == "Add") {
            if (catalog.hasOwnProperty(name) == false) {
                catalog[name] = {
                    composer: tokens[2],
                    key: tokens[3]
                }
                console.log(`${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`);
            } else {
                console.log(`${name} is already in the collection!`);
            }
        } else if (command == "Remove") {
            if (catalog.hasOwnProperty(name) == true) {
                delete catalog[name];
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (command == "ChangeKey") {
            if (catalog.hasOwnProperty(name) == true) {
                catalog[name].key = tokens[2];
                console.log(`Changed the key of ${name} to ${tokens[2]}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
    }
    let sorted = Object.entries(catalog).sort((a, b) => a[0] - b[0]);
    // let sorted = Object.entries(catalog).sort((a, b) => {
    //     let nameA = a[0];
    //     let nameB = b[0];

    //     let composerA = a[1].composer;
    //     let composerB = b[1].composer;

    //     return nameA.localeCompare(nameB) || composerA.localeCompare(composerB);
    // });

    for (let [name, piece] of sorted) {
        console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
    }
};

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);
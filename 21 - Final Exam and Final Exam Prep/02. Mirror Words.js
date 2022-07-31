function solve(input) {
    let pattern = /([@#])(?<pairs>[A-Za-z]{3,}\1\1[A-Za-z]{3,})\1/g;
    let pairs = [];
    let pairsCount = 0;
    let match = pattern.exec(input);
    let mirorWords = [];
    let mirorWordsCount = 0;
    while (match !== null) {
        pairs.push(match.groups.pairs);
        pairsCount++;
        match = pattern.exec(input);
    }
    for (let pair of pairs) {
        let firstWord = pair.substring(0, (pair.length / 2) - 1);
        let secondWord = pair.substring((pair.length / 2) + 1);
        let secondWordReversed = secondWord.split("").reverse().join("");
        if (firstWord == secondWordReversed) {
            mirorWords.push(`${firstWord} <=> ${secondWord}`);
            mirorWordsCount++;
        }
    }
    if (pairsCount <= 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${pairs.length} word pairs found!`);
    }
    if (mirorWordsCount <= 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(`${mirorWords.join(", ")}`);
    }
};

solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
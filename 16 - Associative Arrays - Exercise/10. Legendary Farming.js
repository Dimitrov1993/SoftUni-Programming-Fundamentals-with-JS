function solve(input) {
    input = input.split(" ")
    let keyMaterials = {
        shards: 0,
        fragments: 0,
        motes: 0
    };
    let junkMaterials = {};

    for (let i = 0; i < input.length; i += 2) {
        let currMaterialQuantity = Number(input[i]);
        let currMaterial = input[i + 1].toLowerCase();
        if (currMaterial == "shards" || currMaterial == "fragments" || currMaterial == "motes") {
            keyMaterials[currMaterial] += currMaterialQuantity;
        } else {
            if (junkMaterials.hasOwnProperty(currMaterial)) {
                junkMaterials[currMaterial] += currMaterialQuantity;
            } else {
                junkMaterials[currMaterial] = 0;
                junkMaterials[currMaterial] += currMaterialQuantity;
            }
        }
        if (keyMaterials[currMaterial] >= 250) {
            if (currMaterial == "shards") {
                keyMaterials[currMaterial] -= 250;
                console.log("Shadowmourne obtained!");
                break;
            } else if (currMaterial == "fragments") {
                keyMaterials[currMaterial] -= 250;
                console.log("Valanyr obtained!");
                break;
            } else if (currMaterial == "motes") {
                keyMaterials[currMaterial] -= 250;
                console.log("Dragonwrath obtained!");
                break;
            }
        }
    }
    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunk = Object.entries(junkMaterials).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [material, quantity] of sortedKeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }
    for (let [material, quantity] of sortedJunk) {
        console.log(`${material}: ${quantity}`);
    }
};

solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
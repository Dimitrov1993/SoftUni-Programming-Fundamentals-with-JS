function solve(input) {
    let heroes = [];
    for (let element of input) {
        let info = element.split(" / ");
        let currHeroName = info[0];
        let currHeroLevel = info[1];
        let currHeroItems = info[2].split(", ").join(", ");
        let currHero = {
            name: currHeroName,
            level: currHeroLevel,
            items: currHeroItems,
        }
        heroes.push(currHero);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
};

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
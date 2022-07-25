function towns(input) {
    let finaleResult = {};
    for (let tokens of input) {
        let info = tokens.split(" | ");
        let townName = info[0];
        let latitude = Number(info[1]).toFixed(2);
        let longitude = Number(info[2]).toFixed(2);
        finaleResult.town = townName;
        finaleResult.latitude = latitude;
        finaleResult.longitude = longitude;
        console.log(finaleResult);
    }
};

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
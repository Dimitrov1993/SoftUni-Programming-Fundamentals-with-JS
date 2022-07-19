function solve(startingYield) {
    let daysCount = 0;
    let totalSpiceExtracted = 0;
    while (startingYield >= 100) {
        spiceExtractedCurrentDay = startingYield - 26;
        totalSpiceExtracted = totalSpiceExtracted + spiceExtractedCurrentDay;
        daysCount++;
        startingYield -= 10;
        }

    console.log(daysCount);
    if (totalSpiceExtracted > 0 ) {
        totalSpiceExtracted -= 26;
    } else {
        totalSpiceExtracted = 0;
    }
    console.log(totalSpiceExtracted);
   
};

solve(450);
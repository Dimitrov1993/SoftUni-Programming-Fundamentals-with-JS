function solve(numOfPages, pagesPerHour, days) {
    let timeToReadBook = numOfPages / pagesPerHour;
    let requiredHoursPerDay = timeToReadBook / days;
    console.log(requiredHoursPerDay);
};

solve(212, 20, 2);
solve(432, 15, 4);
function smallestTwoNums(nums) {
    let sortedInAscending = nums.sort((a, b) => a - b);
    console.log(sortedInAscending.slice(0, 2).join(" "));
};

smallestTwoNums([30, 15, 50, 5]);
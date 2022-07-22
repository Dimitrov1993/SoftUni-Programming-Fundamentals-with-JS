function sortAnArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
        newArr.push(arr[i]);
    }
    console.log(newArr.join("\n"));
};

sortAnArray(["Deny", "omen", "test", "Default"]);
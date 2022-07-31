function solve(input) {
    let pattern = /(@#{1,})(?<product>[A-Z][A-Za-z\d]{4,}[A-Z])\1/;
    let num = Number(input.shift());

    for (let i = 0; i < num; i++) {
        let valid = pattern.exec(input[i]);
        if (valid !== null) {
            let productGroup = "";
            for (let ch of valid.groups.product) {
                if (ch.charCodeAt() >= 48 && ch.charCodeAt() <= 57) {
                    productGroup += ch;
                }
            }
            if (productGroup == "") {
                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log("Invalid barcode");
        }
    }
};
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
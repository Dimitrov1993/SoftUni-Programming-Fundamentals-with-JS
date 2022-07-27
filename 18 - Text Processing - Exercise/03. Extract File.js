function solve(text) {
    let wordsStartIndex = text.lastIndexOf("\\") + 1;
    let extensionStartIndex = text.lastIndexOf(".") + 1;
    let name = text.substring(wordsStartIndex, extensionStartIndex - 1);
    let extension = text.substring(extensionStartIndex);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
};

solve('C:\\Internal\\training-internal\\Template.pptx');
export function capitalize(str) {
    if (!typeof(str) === "string") {
        return str;
    };
    let lowerArray = str.toLowerCase().split('');
    let capLetter = lowerArray[0].toUpperCase();
    return capLetter + lowerArray.splice(1).join("");}
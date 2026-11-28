const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export function caesarCipher(str,key) {
    const splitStr = str.split("");
    let codedStr = [];

    console.log("key before for loop: ",key)
    console.log("-----")
    for (let i = 0; i < splitStr.length; i++) {
        console.log("key at start of for loop: ",key)
        let originalIndex = alphabet.indexOf(splitStr[i])
        console.log("index of original letter: ",originalIndex)
        if ((key+originalIndex) > 25) {
            let shiftedKey = (key+originalIndex) % 26;
            console.log("if loop executed shiftedKey: ", shiftedKey)
            codedStr.push(alphabet[shiftedKey]);
        } else {
            console.log("outside if loop shiftedKey: ",key)
            codedStr.push(alphabet[key+originalIndex]);
        };
        console.log("codedStr")
        console.log("-----")
    };
    console.log(codedStr.join(""))
    return codedStr.join("");
};



// caesarCipher("zoom", 113)
// console.log(31%26)
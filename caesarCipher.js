const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function caesarCipher(str,key) {
    const splitStr = str.split("");
    let codedStr = [];

    console.log("key before for loop: ",key)
    console.log("-----")
    for (let i = 0; i < splitStr.length; i++) {
        console.log("key at start of for loop: ",key)
        let originalIndex = alphabet.indexOf(splitStr[i])
        console.log("index of original letter: ",originalIndex)
        if ((Math.abs(key)+originalIndex) > 25) {
            let shiftedKey = (Math.abs(key)+originalIndex) % 26;
            console.log("if loop executed shiftedKey: ", shiftedKey)
            console.log("letter at shiftedKey: ",alphabet[shiftedKey])
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



caesarCipher("abcxyz",-3)
console.log(-5%26)
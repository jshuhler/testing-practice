const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export function caesarCipher(str,key) {
    const splitStr = str.split("");
    let codedStr = [];

    console.log(key)
    for (let i = 0; i < splitStr.length; i++) {
        let y = alphabet.indexOf(splitStr[i])
        console.log("index of original letter: ",y)
        if ((key+y) > 25) {
            key = (key+y) % 26;
            console.log("if loop executed key: ", key)
            codedStr.push(alphabet[key+y]);
        } else {
            console.log("outside if loop key: ",key)
            codedStr.push(alphabet[key+y]);
        }
        // console.log("key: ",key)
        
        // console.log("index of new letter: ",key+y)
        console.log("-----")
    };
    console.log(codedStr.join(""))
    return codedStr.join("");
};

caesarCipher("zoom", 17)
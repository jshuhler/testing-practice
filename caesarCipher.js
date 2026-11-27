const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export function caesarCipher(str,x) {
    const splitStr = str.split("");
    let codedStr = [];
    for (let i = 0; i < splitStr.length; i++) {
        let y = alphabet.indexOf(splitStr[i])
        codedStr.push(alphabet[x+y]);
    };
    return codedStr.join("");
};

// caesarCipher("hello",1)
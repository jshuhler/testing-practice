const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export function caesarCipher(str,x) {
    const splitStr = str.split("")
    console.log(splitStr)
    for (let i = 0; i < splitStr.length; i++) {
        let y = i + x
        console.log(y)
        console.log(alphabet.indexOf(splitStr[i]))
        console.log(alphabet[alphabet.indexOf(splitStr[i])])

        console.log(alphabet.indexOf(splitStr[y]))
        console.log(alphabet[alphabet.indexOf(splitStr[y])])
    
    }
};

caesarCipher("hello",1)

// .find() or .findIndex() maybe
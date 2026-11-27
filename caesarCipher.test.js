import { caesarCipher } from "./caesarCipher.js"

test('Single word lowercase string, no wrapping', () => {
    expect(caesarCipher("hello",1)).toBe("ifmmp");
    expect(caesarCipher("macaroni",8)).toBe("uikizwvq");
    expect(caesarCipher("reverse",-2)).toBe("pctcpqc");
});

// single word lowercase string, no wrapping
// single word lowercase string, wrapping
// single word string, case preservation
// multiword string, punctuation and spaces

// include in each test passing a negative x value
import { caesarCipher } from "./caesarCipher.js"

test('Single word lowercase string, no wrapping', () => {
    expect(caesarCipher("hello",1)).toBe("ifmmp");
    expect(caesarCipher("macaroni",8)).toBe("uikizwvq");
    expect(caesarCipher("reverse",-2)).toBe("pctcpqc");
});

test('Single word lowercase string, wrapping', () => {
    expect(caesarCipher("zoom", 17)).toBe("qffd");
    expect(caesarCipher("wrapping",-27)).toBe("vqzoohmf");
    expect(caesarCipher("abcxyz",-3)).toBe("xyzuvw");
});

// TESTS:
// x - single word lowercase string, no wrapping
// single word lowercase string, wrapping
// single word string, case preservation
// multiword string, punctuation and spaces

// include in each test passing a negative x value
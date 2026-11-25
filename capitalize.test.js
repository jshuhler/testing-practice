import { capitalize } from "./capitalize.js";

test('Mix case input', () => {
    expect(capitalize("qWeRTy")).toBe("Qwerty");
    expect(capitalize("cOmpUTeR")).toBe("Computer");
});

test('Multi word input', () => {
    expect(capitalize("multiword strings don't matter")).toBe("Multiword strings don't matter");
    expect(capitalize("typing typing blah BLAH")).toBe("Typing typing blah blah");
});

test('Letter and non-letter input', () => {
    expect(capitalize("qwerty789")).toBe("Qwerty789");
    expect(capitalize("789qwErty.")).toBe("789qwerty.");
});

test('Uppercase input', () => {
    expect(capitalize("LOUD NOISES")).toBe("Loud noises");
    expect(capitalize("SCREAMING")).toBe("Screaming");
});

test('Valid input', () => {
    expect(capitalize("Validity")).toBe("Validity");
    expect(capitalize("One long string")).toBe("One long string");
});

test('Non string input', () => {
    expect(capitalize("1234")).toBe("1234");
});

// mix case input
// multiword
// numbers
// all uppercase
// correct capitalization already
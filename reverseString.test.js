import { reverseString } from "./reverseString.js";

test('Normal string input', () => {
    expect(reverseString("Bolognese")).toBe("esengoloB");
    expect(reverseString("Ragu")).toBe("ugaR");
});

test('Multi word string input', () => {
    expect(reverseString("It's not Bolognese, it's Ragu")).toBe("ugaR s'ti ,esengoloB ton s'tI");
});

test('Non string input', () => {
    expect(12345).toBe(12345);
});

// normal string
// multi word string
// non-string
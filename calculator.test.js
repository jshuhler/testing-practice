import { calculator } from "./calculator.js"

test('Add', () => {
    expect(calculator.add(7,23)).toBe(30);
    expect(calculator.add(-23,4)).toBe(-19);
});

test('Subtract', () => {
    expect(calculator.subtract(7,23)).toBe(-16);
    expect(calculator.subtract(99,0)).toBe(99);
});

test('Multiply', () => {
    expect(calculator.multiply(7,23)).toBe(161);
    expect(calculator.multiply(420,0)).toBe(0);
});

test('Divide', () => {
    expect(calculator.divide(99,3)).toBe(33);
    expect(calculator.divide(0,17)).toBe(0);
    expect(calculator.divide(17,0)).toBe(Infinity);
    expect(calculator.divide(17,6)).toBeCloseTo(2.833);
});

// add
// subtract
// multiply (include by 0)
// divide (include by 0, include fractions?)
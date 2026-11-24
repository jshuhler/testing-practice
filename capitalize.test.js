const capitalize = require('./capitalize');

test('Mix case input', () => {
    expect(capitalize('qWeRTy')).toBe('Qwerty');
});

// multiword
// numbers
// all lowercase
// correct capitalization already
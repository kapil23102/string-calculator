const { add } = require('./stringCalculator');

test('empty string returns 0', () => {
    expect(add('')).toBe(0);
});

test('single number returns the number itself', () => {
    expect(add('1')).toBe(1);
});

test('two numbers return their sum', () => {
    expect(add('1,5')).toBe(6);
});

test('multiple numbers return their sum', () => {
    expect(add('1,2,3,4')).toBe(10);
});

test('handles new lines as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
});

test('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
});

test('throws exception for negative numbers', () => {
    expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed: -2, -4');
});
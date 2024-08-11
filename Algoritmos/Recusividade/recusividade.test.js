const fatorial = require('./index');

test('Fatorial de 0 deve ser 1', () => {
    expect(fatorial(0)).toBe(1);
});

test('Fatorial de 1 deve ser 1', () => {
    expect(fatorial(1)).toBe(1);
});

test('Fatorial de 2 deve ser 2', () => {
    expect(fatorial(2)).toBe(2);
});

test('Fatorial de 3 deve ser 6', () => {
    expect(fatorial(3)).toBe(6);
});

test('Fatorial de 4 deve ser 24', () => {
    expect(fatorial(4)).toBe(24);
});

test('Fatorial de 5 deve ser 120', () => {
    expect(fatorial(5)).toBe(120);
});

const isAnagram = require('./index.js');

test('Identifica corretamente anagramas simples', () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
    expect(isAnagram('evil', 'vile')).toBe(true);
});

test('Identifica corretamente strings que não são anagramas', () => {
    expect(isAnagram('hello', 'world')).toBe(false);
    expect(isAnagram('apple', 'pale')).toBe(false);
});

test('Ignora espaços e diferenças de maiúsculas e minúsculas', () => {
    expect(isAnagram('Listen', 'Silent')).toBe(true);
    expect(isAnagram('The eyes', 'They see')).toBe(true);
});

test('Retorna falso para strings de comprimentos diferentes', () => {
    expect(isAnagram('hello', 'helloo')).toBe(false);
});

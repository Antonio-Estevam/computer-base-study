

const linearSearch = require('./index');

test('Encontra o número na lista', () => {
  expect(linearSearch(6, [5, 3, 8, 6, 2, 7])).toBe(3);
});

test('Não encontra o número na lista', () => {
  expect(linearSearch(4, [5, 3, 8, 6, 2, 7])).toBe(-1);
});

test('Encontra o número na primeira posição', () => {
  expect(linearSearch(5, [5, 3, 8, 6, 2, 7])).toBe(0);
});

test('Encontra o número na última posição', () => {
  expect(linearSearch(7, [5, 3, 8, 6, 2, 7])).toBe(5);
});

test('Lista vazia retorna -1', () => {
  expect(linearSearch(1, [])).toBe(-1);
});

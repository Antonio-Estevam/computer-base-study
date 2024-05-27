const binarySearch = require('./index');

test('Encontra o número na lista ordenada', () => {
  expect(binarySearch(6, [2, 3, 5, 6, 7, 8])).toBe(3);
});

test('Não encontra o número na lista ordenada', () => {
  expect(binarySearch(4, [2, 3, 5, 6, 7, 8])).toBe(-1);
});

test('Encontra o número na primeira posição', () => {
  expect(binarySearch(2, [2, 3, 5, 6, 7, 8])).toBe(0);
});

test('Encontra o número na última posição', () => {
  expect(binarySearch(8, [2, 3, 5, 6, 7, 8])).toBe(5);
});

test('Lista vazia retorna -1', () => {
  expect(binarySearch(1, [])).toBe(-1);
});
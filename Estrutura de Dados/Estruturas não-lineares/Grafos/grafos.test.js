const { areConnected } = require('./index.js');

describe('areConnected', () => {
  test('deve retornar true se dois vértices estiverem conectados', () => {
    const graph = {
      0: [1, 2],
      1: [0, 2],
      2: [0, 1],
      3: [4, 5],
      4: [3, 5],
      5: [3, 4]
    };
    expect(areConnected(graph, 0, 2)).toBe(true);
    expect(areConnected(graph, 3, 5)).toBe(true);
  });

  test('deve retornar false se dois vértices não estiverem conectados', () => {
    const graph = {
      0: [1, 2],
      1: [0, 2],
      2: [0, 1],
      3: [4, 5],
      4: [3, 5],
      5: [3, 4]
    };
    expect(areConnected(graph, 0, 5)).toBe(false);
    expect(areConnected(graph, 1, 3)).toBe(false);
  });

  test('deve retornar false se um dos vértices não existir', () => {
    const graph = {
      0: [1, 2],
      1: [0, 2],
      2: [0, 1]
    };
    expect(areConnected(graph, 0, 3)).toBe(false);
    expect(areConnected(graph, 2, 4)).toBe(false);
  });

  test('deve retornar true para um vértice conectado a si mesmo', () => {
    const graph = {
      0: [1],
      1: [0]
    };
    expect(areConnected(graph, 0, 0)).toBe(true);
  });
});

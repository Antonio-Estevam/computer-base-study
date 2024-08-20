const HashTable = require('./HashTable');

describe('HashTable', () => {
  let table;

  beforeEach(() => {
    table = new HashTable(10); // Tamanho da tabela é 10
  });

  test('deve inserir e buscar um usuário corretamente', () => {
    table.set(1, 'Alice', 28);
    table.set(2, 'Bob', 34);

    expect(table.get(1)).toEqual({ name: 'Alice', age: 28 });
    expect(table.get(2)).toEqual({ name: 'Bob', age: 34 });
  });

  test('deve retornar null para um usuário não existente', () => {
    expect(table.get(3)).toBeNull();
  });

  test('deve remover um usuário corretamente', () => {
    table.set(1, 'Alice', 28);
    table.remove(1);

    expect(table.get(1)).toBeNull();
  });

  test('deve lidar com colisões usando encadeamento', () => {
    table.set(1, 'Alice', 28);
    table.set(11, 'Bob', 34); // Supondo que 1 e 11 causem colisão

    expect(table.get(1)).toEqual({ name: 'Alice', age: 28 });
    expect(table.get(11)).toEqual({ name: 'Bob', age: 34 });

    table.remove(1);
    expect(table.get(1)).toBeNull();
    expect(table.get(11)).toEqual({ name: 'Bob', age: 34 });
  });
});

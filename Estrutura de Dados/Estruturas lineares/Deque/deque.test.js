// deque.test.js
const Deque = require('./index.js'); // Supondo que você salve sua implementação em um arquivo chamado deque.js

describe('Deque', () => {
  let deque;

  beforeEach(() => {
    deque = new Deque();
  });

  test('deve adicionar elementos no início e no final', () => {
    deque.addFront(1);
    deque.addBack(2);
    expect(deque.peekFront()).toBe(1);
    expect(deque.peekBack()).toBe(2);
  });

  test('deve remover elementos do início e do final', () => {
    deque.addFront(1);
    deque.addBack(2);
    expect(deque.removeFront()).toBe(1);
    expect(deque.removeBack()).toBe(2);
    expect(deque.isEmpty()).toBe(true);
  });

  test('deve verificar se está vazio', () => {
    expect(deque.isEmpty()).toBe(true);
    deque.addFront(1);
    expect(deque.isEmpty()).toBe(false);
  });

  test('deve retornar o elemento correto sem removê-lo', () => {
    deque.addFront(1);
    deque.addBack(2);
    expect(deque.peekFront()).toBe(1);
    expect(deque.peekBack()).toBe(2);
    expect(deque.removeFront()).toBe(1);
    expect(deque.removeBack()).toBe(2);
  });

  test('deve funcionar com vários elementos', () => {
    deque.addBack(1);
    deque.addBack(2);
    deque.addFront(0);
    expect(deque.peekFront()).toBe(0);
    expect(deque.peekBack()).toBe(2);
    expect(deque.removeFront()).toBe(0);
    expect(deque.removeBack()).toBe(2);
    expect(deque.peekFront()).toBe(1);
  });
});

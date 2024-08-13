const Queue = require('./Queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('deve iniciar vazia', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('deve adicionar elementos na fila usando enqueue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(1);
  });

  test('deve remover elementos da fila usando dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  test('deve retornar null ao tentar remover de uma fila vazia', () => {
    expect(queue.dequeue()).toBe(null);
  });

  test('deve retornar o elemento da frente sem removê-lo usando peek', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
    expect(queue.size()).toBe(1);
  });

  test('deve retornar o tamanho correto da fila usando size', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    queue.dequeue();
    expect(queue.size()).toBe(1);
  });

  test('deve retornar true para isEmpty em uma fila vazia', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test('deve retornar false para isEmpty em uma fila com elementos', () => {
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});

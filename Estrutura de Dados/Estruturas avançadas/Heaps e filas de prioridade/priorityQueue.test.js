const PriorityQueue = require('./PriorityQueue');

describe('PriorityQueue', () => {
  let pq;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  test('deve adicionar elementos com prioridades diferentes e retornar o de maior prioridade', () => {
    pq.enqueue('task1', 3);
    pq.enqueue('task2', 1);
    pq.enqueue('task3', 2);

    expect(pq.peek()).toBe('task2');
  });

  test('deve remover e retornar o elemento de maior prioridade', () => {
    pq.enqueue('task1', 3);
    pq.enqueue('task2', 1);
    pq.enqueue('task3', 2);

    expect(pq.dequeue()).toBe('task2');
    expect(pq.dequeue()).toBe('task3');
    expect(pq.dequeue()).toBe('task1');
  });

  test('deve retornar true quando a fila está vazia', () => {
    expect(pq.isEmpty()).toBe(true);
  });

  test('deve retornar false quando a fila não está vazia', () => {
    pq.enqueue('task1', 3);
    expect(pq.isEmpty()).toBe(false);
  });

  test('deve lidar corretamente com a remoção até a fila ficar vazia', () => {
    pq.enqueue('task1', 3);
    pq.enqueue('task2', 1);

    expect(pq.dequeue()).toBe('task2');
    expect(pq.dequeue()).toBe('task1');
    expect(pq.isEmpty()).toBe(true);
  });
});

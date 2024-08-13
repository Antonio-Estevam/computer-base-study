# Filas
Filas são um tipo de estrutura de dados linear onde os elementos são inseridos em uma extremidade (chamada de "final" ou "traseira") e removidos da outra extremidade (chamada de "frente" ou "início"). Isso significa que as filas seguem a regra FIFO (First In, First Out), que pode ser traduzido como "O primeiro a entrar é o primeiro a sair".

Imagine uma fila de pessoas esperando para entrar em um ônibus. A primeira pessoa a entrar na fila será a primeira a entrar no ônibus, e assim por diante. Da mesma forma, em uma fila de dados, o primeiro elemento inserido será o primeiro a ser removido.

## Desafio
Implemente uma fila em JavaScript que tenha as seguintes funcionalidades:

enqueue(element): Adiciona um elemento ao final da fila.
dequeue(): Remove e retorna o elemento da frente da fila.
peek(): Retorna o elemento da frente da fila sem removê-lo.
isEmpty(): Retorna true se a fila estiver vazia, caso contrário, false.
size(): Retorna o número de elementos na fila.

## Exemplo de Implementação em JavaScript
Aqui está um exemplo de como você pode implementar essa fila:

```JavaScript
    class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

module.exports = Queue;

```

## Teste com Jest

```JavaScript
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

```
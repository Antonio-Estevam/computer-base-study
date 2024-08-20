# Heaps e Filas de Prioridade

## O que são Heaps?

Imagine que você está organizando uma pilha de livros. O heap é como uma estrutura que te ajuda a organizar esses livros de uma maneira específica: o maior ou o menor livro (em termos de prioridade) fica sempre no topo.

**Heaps** são um tipo especial de árvore binária, onde cada nó segue uma regra: o nó pai é sempre maior ou igual (ou menor ou igual, dependendo do tipo de heap) que seus filhos. Isso significa que o livro mais importante ou com maior prioridade está sempre em uma posição privilegiada.

Existem dois tipos principais de heaps:
- **Max-Heap:** O valor do nó pai é sempre maior ou igual aos valores dos nós filhos. Ou seja, o maior valor está sempre no topo.
- **Min-Heap:** O valor do nó pai é sempre menor ou igual aos valores dos nós filhos. Nesse caso, o menor valor está sempre no topo.

## O que são Filas de Prioridade?

Agora, pense em uma fila de banco. As pessoas que têm prioridade, como idosos ou grávidas, passam na frente, independentemente de quando chegaram. Uma **fila de prioridade** é exatamente isso, mas no mundo da programação. É uma estrutura onde cada elemento tem uma "prioridade" associada a ele, e os elementos com maior prioridade são atendidos primeiro.

Quando implementamos uma fila de prioridade, frequentemente usamos um heap por baixo dos panos. Por exemplo:
- Se usamos um **min-heap**, os elementos com menor valor de prioridade são atendidos primeiro.
- Se usamos um **max-heap**, os elementos com maior valor de prioridade são atendidos primeiro.

## Exemplo Prático

Vamos imaginar que você está organizando suas tarefas do dia. Cada tarefa tem uma prioridade: 1 para mais importante e 5 para menos importante. Se você usar uma fila de prioridade (implementada com um min-heap), você sempre vai começar pela tarefa com prioridade 1, mesmo que ela tenha sido adicionada depois das outras.

**Metáfora:** Pense em uma festa onde você é o DJ. As músicas mais pedidas (as com maior prioridade) vão tocar primeiro, mesmo que você tenha recebido o pedido de outra música antes. A fila de prioridade é como uma playlist dinâmica onde a música mais importante sempre toca antes.

## O Essencial para Aprender

Para entender 80% do que você precisa sobre heaps e filas de prioridade, foque nesses tópicos:
1. **Entender a estrutura de um heap:** Como os elementos são organizados em max-heaps e min-heaps.
2. **Inserção e Remoção no Heap:** Como adicionar e remover elementos mantendo a propriedade do heap.
3. **Como uma fila de prioridade usa um heap:** O papel do heap para garantir que os elementos com maior prioridade sejam processados primeiro.

## Perguntas para Refletir

- Como as operações de inserção e remoção afetam a eficiência de um heap?
- Em que situações reais você usaria um max-heap em vez de um min-heap?
- Como você implementaria uma fila de prioridade sem usar um heap? Seria eficiente?



# Desafio: Implementando uma Fila de Prioridade

## Enunciado

Sua tarefa é implementar uma **Fila de Prioridade** usando um **Min-Heap** em Node.js. A fila de prioridade deve suportar as seguintes operações:

1. **`enqueue(element, priority)`**: Adiciona um novo elemento à fila com uma determinada prioridade. Quanto menor o número, maior a prioridade do elemento.
2. **`dequeue()`**: Remove e retorna o elemento com a maior prioridade (menor valor de prioridade).
3. **`peek()`**: Retorna o elemento com a maior prioridade sem removê-lo da fila.
4. **`isEmpty()`**: Retorna `true` se a fila estiver vazia, e `false` caso contrário.

A estrutura interna do heap deve ser implementada como um array onde:
- O elemento na posição `i` tem seus filhos nas posições `2*i + 1` e `2*i + 2`.
- O elemento na posição `i` tem seu pai na posição `(i-1) // 2`.

Implemente sua solução no arquivo `PriorityQueue.js`.

### Exemplo de Uso

```javascript
const pq = new PriorityQueue();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);

console.log(pq.peek()); // Saída: 'task2'
console.log(pq.dequeue()); // Saída: 'task2'
console.log(pq.dequeue()); // Saída: 'task3'
console.log(pq.isEmpty()); // Saída: false
console.log(pq.dequeue()); // Saída: 'task1'
console.log(pq.isEmpty()); // Saída: true
```
# Deques
Deque (pronuncia-se "deck") é uma abreviação de "double-ended queue" ou fila de duas pontas. É uma estrutura de dados linear que permite a inserção e remoção de elementos tanto no início quanto no final da fila. Isso significa que você pode adicionar ou remover itens de ambos os lados, o que o torna muito flexível. Deques são úteis quando você precisa de uma estrutura que suporte operações eficientes de fila e pilha.

## Principais operações em um Deque:
Adicionar no Início: Insere um elemento no início do deque.
Adicionar no Final: Insere um elemento no final do deque.
Remover do Início: Remove um elemento do início do deque.
Remover do Final: Remove um elemento do final do deque.
Verificar o Início: Retorna o elemento no início sem removê-lo.
Verificar o Final: Retorna o elemento no final sem removê-lo.
Verificar se está Vazio: Retorna se o deque está vazio ou não.
Desafio: Implementando um Deque
Enunciado do Desafio:
Implemente uma classe Deque em JavaScript que suporte as operações de adicionar e remover elementos tanto do início quanto do final da estrutura. Além disso, implemente métodos para verificar o elemento no início e no final sem removê-los, e um método para verificar se o deque está vazio.

### Requisitos:

addFront(elemento): Adiciona um elemento no início do deque.
addBack(elemento): Adiciona um elemento no final do deque.
removeFront(): Remove e retorna o elemento do início do deque.
removeBack(): Remove e retorna o elemento do final do deque.
peekFront(): Retorna o elemento no início do deque sem removê-lo.
peekBack(): Retorna o elemento no final do deque sem removê-lo.
isEmpty(): Retorna true se o deque estiver vazio e false caso contrário.
Arquivo de Teste (Jest)
#### Aqui está um exemplo de arquivo de teste para verificar sua implementação:

```javascript
// deque.test.js
const Deque = require('./index.ts'); // Supondo que você salve sua implementação em um arquivo chamado deque.js

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
}); ```

Este arquivo de teste verifica se sua implementação da estrutura de dados Deque está funcionando corretamente para os principais casos de uso. Se todos os testes passarem, sua implementação estará correta.
# Estrutura de Dados Linear Pilhas
Uma pilha é uma estrutura de dados linear que funciona como uma coleção de elementos, onde o acesso a esses elementos é restrito a um único ponto: o topo da pilha. A pilha segue o princípio LIFO (Last In, First Out), que significa que o último elemento adicionado (inserido) é o primeiro a ser removido.

Imagine uma pilha de pratos: você só pode adicionar ou remover o prato que está no topo. Se você empilhar um novo prato, ele vai para o topo, e se for tirar um prato, você tira o que está no topo.

## Operações Básicas em Pilhas
- Push: Adiciona um elemento ao topo da pilha.
- Pop: Remove o elemento do topo da pilha.
- Peek (ou Top): Retorna o elemento do topo da pilha sem removê-lo.
- isEmpty: Verifica se a pilha está vazia.

### Exemplo Visual de uma Pilha
- Push(1): [1]
- Push(2): [1, 2]
- Push(3): [1, 2, 3]
- Pop(): [1, 2] -> Retorna 3, o último adicionado.

## Desafio de Implementação em JavaScript
Desafio:
Implemente uma estrutura de dados Pilha em JavaScript com as seguintes operações:

- push(element): Adiciona um elemento ao topo da pilha.
- pop(): Remove e retorna o elemento do topo da pilha.
- peek(): Retorna o elemento do topo da pilha sem removê-lo.
- isEmpty(): Retorna true se a pilha estiver vazia, caso contrário, false.

Implementação:

```javascript 
class Pilha {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null; // ou poderia lançar um erro
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null; // ou poderia lançar um erro
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = Pilha;

```

### Arquivo de Teste (Jest)
Para garantir que sua implementação da pilha funcione corretamente, aqui está um conjunto de testes usando o Jest:

```javascript 
    const Pilha = require('./pilha');

describe('Pilha', () => {
    let pilha;

    beforeEach(() => {
        pilha = new Pilha();
    });

    test('Deve iniciar com a pilha vazia', () => {
        expect(pilha.isEmpty()).toBe(true);
    });

    test('Deve adicionar elementos à pilha usando push', () => {
        pilha.push(10);
        expect(pilha.isEmpty()).toBe(false);
        expect(pilha.peek()).toBe(10);
    });

    test('Deve remover elementos da pilha usando pop', () => {
        pilha.push(20);
        pilha.push(30);
        expect(pilha.pop()).toBe(30);
        expect(pilha.peek()).toBe(20);
    });

    test('Deve retornar o topo da pilha usando peek sem removê-lo', () => {
        pilha.push(40);
        pilha.push(50);
        expect(pilha.peek()).toBe(50);
        expect(pilha.pop()).toBe(50);
        expect(pilha.peek()).toBe(40);
    });

    test('Deve retornar null ao usar pop ou peek em uma pilha vazia', () => {
        expect(pilha.pop()).toBeNull();
        expect(pilha.peek()).toBeNull();
    });
});

```

### Explicação do Teste
- beforeEach: Cria uma nova instância da pilha antes de cada teste.
- Teste de Inicialização: Verifica se a pilha começa vazia.
- Teste de Push: Verifica se os elementos são corretamente adicionados ao topo.
- Teste de Pop: Verifica se os elementos são corretamente removidos do topo.
- Teste de Peek: Verifica se o elemento do topo é retornado corretamente sem removê-lo.
- Teste com Pilha Vazia: Verifica se pop e peek retornam null quando a pilha está vazia.
###  Conclusão
Com essa implementação e os testes, você pode garantir que sua pilha funciona corretamente, seguindo o princípio LIFO. Esse é um exercício fundamental para entender estruturas de dados e é útil em várias situações, como na navegação de páginas (histórico), operações em linguagens de programação (pilha de chamadas) e muito mais.
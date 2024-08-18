# Soma dos Nós da Árvore Binária
Você deve implementar uma função chamada sumOfNodes que receba a raiz de uma árvore binária e retorne a soma de todos os valores dos nós dessa árvore.

## Regras:
Cada nó da árvore contém um número inteiro.
A soma deve incluir todos os nós da árvore, incluindo a raiz.
Se a árvore estiver vazia (ou seja, a raiz for null), a função deve retornar 0.
Exemplo:

Para a seguinte árvore binária:

```css markdown
      10
     /  \
    5   15
   / \   / \
  2   7 12  20
```

A função sumOfNodes deve retornar 71 (10 + 5 + 15 + 2 + 7 + 12 + 20).

## 🛠️ Arquivo de Teste com Jest
Aqui está um arquivo de teste que você pode usar para verificar se sua implementação está correta.

```javascript
// sumOfNodes.test.js

const { sumOfNodes, TreeNode } = require('./sumOfNodes');

describe('sumOfNodes', () => {
  test('deve retornar a soma de todos os nós de uma árvore binária', () => {
    const root = new TreeNode(10);
    root.left = new TreeNode(5);
    root.right = new TreeNode(15);
    root.left.left = new TreeNode(2);
    root.left.right = new TreeNode(7);
    root.right.left = new TreeNode(12);
    root.right.right = new TreeNode(20);
    
    expect(sumOfNodes(root)).toBe(71);
  });

  test('deve retornar 0 para uma árvore vazia', () => {
    expect(sumOfNodes(null)).toBe(0);
  });

  test('deve funcionar corretamente para uma árvore com apenas um nó', () => {
    const root = new TreeNode(42);
    expect(sumOfNodes(root)).toBe(42);
  });

  test('deve funcionar corretamente para uma árvore com nós negativos', () => {
    const root = new TreeNode(-10);
    root.left = new TreeNode(-5);
    root.right = new TreeNode(-15);
    
    expect(sumOfNodes(root)).toBe(-30);
  });
}); 
```

## 📜 Estrutura da Solução
Aqui está uma estrutura básica de como você pode começar a implementar a solução:

```javascript
// sumOfNodes.js

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function sumOfNodes(root) {
  if (root === null) {
    return 0;
  }

  // Implementação da soma dos nós aqui
}

// Exportar as funções para o teste
module.exports = { sumOfNodes, TreeNode };
```

## 💡 Dicas para Implementação
Recursão: Uma abordagem comum para navegar em uma árvore binária é usar recursão. Você pode somar o valor do nó atual com a soma dos nós das subárvores esquerda e direita.
Caso Base: Lembre-se de definir o caso base da recursão, onde a função deve retornar 0 se o nó atual for null.

## 🚀 Testando Sua Solução
Depois de implementar sua solução, você pode rodar os testes usando o Jest. Basta garantir que você tenha o Jest instalado e execute o seguinte comando:

```bash
jest sumOfNodes.test.js
```
Isso deve rodar os testes e te dar feedback sobre se sua solução está correta.

Boa sorte com a implementação! Se precisar de mais alguma ajuda, estarei por aqui. 😊
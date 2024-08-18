# Verificação de Conexão em Grafo Não Direcionado
Você deve implementar uma função chamada areConnected que receba a representação de um grafo não direcionado e dois vértices, e determine se existe um caminho entre esses dois vértices.

## Regras:
O grafo será representado como uma lista de adjacência.
A função deve retornar true se houver um caminho entre os dois vértices e false caso contrário.
Os vértices podem ser identificados por números inteiros.
Se um dos vértices não existir no grafo, a função deve retornar false.
Exemplo:

### Para o grafo representado como:

```javascript
Copiar código
0 -- 1    3
|  /     / \
2       4   5
```

A lista de adjacência seria:

```javascript
Copiar código
const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1],
  3: [4, 5],
  4: [3, 5],
  5: [3, 4]
};

areConnected(graph, 0, 2) deve retornar true.
areConnected(graph, 0, 5) deve retornar false.
```
## 🛠️ Arquivo de Teste com Jest
Aqui está um arquivo de teste que você pode usar para verificar se sua implementação está correta.

```javascript

// areConnected.test.js

const { areConnected } = require('./areConnected');

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
```
## 📜 Estrutura da Solução
Aqui está uma estrutura básica de como você pode começar a implementar a solução:

```javascript
// areConnected.js

function areConnected(graph, start, end) {
  // Verifica se os vértices existem no grafo
  if (!graph[start] || !graph[end]) {
    return false;
  }

  // Implementação para verificar se há um caminho entre start e end
}

// Exportar a função para o teste
module.exports = { areConnected };
```
## 💡 Dicas para Implementação
- Busca em Largura (BFS): Um método eficiente para encontrar se dois vértices estão conectados em um grafo não direcionado é usar a Busca em Largura. Isso garantirá que você explore todos os caminhos possíveis de maneira ordenada.

- Evitar Ciclos: Use uma estrutura (como um conjunto) para marcar os vértices visitados, evitando visitar os mesmos vértices repetidamente.
Exploração Recursiva: Alternativamente, você pode usar a Busca em Profundidade (DFS), que também é eficaz para este tipo de problema.

## 🚀 Testando Sua Solução
Depois de implementar sua solução, você pode rodar os testes usando o Jest. Basta garantir que você tenha o Jest instalado e execute o seguinte comando:

```bash
Copiar código
jest areConnected.test.js
```

Isso deve rodar os testes e te dar feedback sobre se sua solução está correta.

Boa sorte com a implementação! Se precisar de mais alguma ajuda, estarei por aqui. 😊
// areConnected.js

function areConnected(graph, start, end) {
    // Verifica se os vértices existem no grafo
    if (!graph[start] || !graph[end]) {
      return false;
    }
  
    // Se os vértices são iguais, eles estão obviamente conectados
    if (start === end) {
      return true;
    }
  
    // Usamos uma fila para BFS e um conjunto para marcar os vértices visitados
    const queue = [start];
    const visited = new Set();
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      // Se encontramos o vértice final, retornamos true
      if (current === end) {
        return true;
      }
  
      // Marcamos o vértice atual como visitado
      visited.add(current);
  
      // Adiciona os vizinhos não visitados à fila
      for (let neighbor of graph[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  
    // Se esgotamos todas as possibilidades e não encontramos o vértice final
    return false;
  }
  
  // Exportar a função para o teste
  module.exports = { areConnected };
  
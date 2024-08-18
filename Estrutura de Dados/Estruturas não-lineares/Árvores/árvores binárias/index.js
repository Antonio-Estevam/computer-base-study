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

  // Soma o valor do nó atual com a soma dos nós das subárvores esquerda e direita
  return root.value + sumOfNodes(root.left) + sumOfNodes(root.right);
}

// Exportar as funções para o teste
module.exports = { sumOfNodes, TreeNode };

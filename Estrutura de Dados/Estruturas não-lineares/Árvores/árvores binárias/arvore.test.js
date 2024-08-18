const { sumOfNodes, TreeNode } = require('./index.js');

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

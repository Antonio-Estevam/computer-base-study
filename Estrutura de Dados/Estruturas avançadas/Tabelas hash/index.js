const HashTable = require("./HashTable");

const table = new HashTable(10);
table.set(1, "Alice", 28);
table.set(2, "Bob", 34);

console.log(table.get(1)); // Deve retornar: { name: "Alice", age: 28 }
console.log(table.get(2)); // Deve retornar: { name: "Bob", age: 34 }

table.remove(1);
console.log(table.get(1)); // Deve retornar: null

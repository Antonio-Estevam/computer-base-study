# Tabela Hash em Node.js

## Descrição do Projeto

Este projeto implementa uma estrutura de dados do tipo **Tabela Hash** em Node.js. A tabela hash é utilizada para armazenar informações de usuários, como ID, nome e idade, de maneira eficiente, permitindo a inserção, busca e remoção de dados. 

A implementação utiliza o método de **encadeamento** para lidar com colisões, ou seja, quando duas chaves diferentes resultam no mesmo índice na tabela.

## Estrutura da Tabela Hash

### O que é uma Tabela Hash?

Uma tabela hash é uma estrutura de dados que associa chaves a valores, permitindo o acesso rápido aos dados. Ela utiliza uma função hash para transformar a chave em um índice de um array, onde o valor correspondente será armazenado. 

### Componentes Principais:

- **Chave:** Identificador único para os valores armazenados (neste caso, o ID do usuário).
- **Valor:** Dados associados à chave (nome e idade do usuário).
- **Função Hash:** Uma função que mapeia a chave para um índice na tabela.
- **Encadeamento:** Método utilizado para resolver colisões, onde múltiplas chaves podem ser armazenadas no mesmo índice usando listas ligadas.

### Funcionalidades Implementadas

A classe `HashTable` oferece as seguintes funcionalidades:

1. **Inserção (`set(id, name, age)`):** Adiciona ou atualiza as informações de um usuário na tabela.
2. **Busca (`get(id)`):** Retorna as informações de um usuário a partir do ID.
3. **Remoção (`remove(id)`):** Remove um usuário da tabela a partir do ID.
4. **Tratamento de Colisões:** Implementado através de encadeamento, onde cada índice da tabela pode conter uma lista de pares chave-valor.

## Desafio Proposto

Você foi desafiado a implementar uma tabela hash em Node.js para armazenar informações de usuários. A classe `HashTable` deve ser capaz de:

- Inserir e atualizar informações de usuários.
- Buscar dados de um usuário pelo ID.
- Remover usuários do sistema.
- Lidar com colisões usando listas ligadas (encadeamento).

### Exemplo de Uso

```javascript
const table = new HashTable(10);
table.set(1, "Alice", 28);
table.set(2, "Bob", 34);

console.log(table.get(1)); // Saída: { name: "Alice", age: 28 }
console.log(table.get(2)); // Saída: { name: "Bob", age: 34 }

table.remove(1);
console.log(table.get(1)); // Saída: null
```

### Testes
Para garantir que sua implementação está correta, os testes foram escritos usando Jest. Esses testes cobrem:

Inserção e busca de usuários.
Remoção de usuários.
Tratamento de colisões.
### Comando para rodar os testes
```bash
npm test
```

Os testes garantirão que a sua tabela hash funciona corretamente, lidando com colisões e executando operações de maneira eficiente.

### Conclusão
Este projeto demonstra como implementar uma tabela hash básica em Node.js. Com a compreensão dessa estrutura de dados, você pode aplicá-la em diversos cenários onde é necessário armazenar e acessar informações de maneira rápida e eficiente. Se tiver mais perguntas ou desejar expandir essa implementação, sinta-se à vontade para explorar e experimentar!

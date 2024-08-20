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

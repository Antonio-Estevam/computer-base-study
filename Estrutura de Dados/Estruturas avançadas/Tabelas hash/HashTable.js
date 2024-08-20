class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = Array(size).fill(null).map(() => []);
    }
  
    hash(key) {
      return key % this.size;
    }
  
    set(id, name, age) {
      const index = this.hash(id);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === id) {
          bucket[i][1] = { name, age };
          return;
        }
      }
  
      bucket.push([id, { name, age }]);
    }
  
    get(id) {
      const index = this.hash(id);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === id) {
          return bucket[i][1];
        }
      }
  
      return null;
    }
  
    remove(id) {
      const index = this.hash(id);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === id) {
          bucket.splice(i, 1);
          return;
        }
      }
    }
  }
  
  module.exports = HashTable;
  
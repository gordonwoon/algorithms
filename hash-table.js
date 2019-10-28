class HashTable {
  constructor() {
    this.bucketSize = 999;
    this.bucket = [];
    for(let i = 0; i < this.bucketSize; i++) {
      this.bucket.push(new SimpleDict);
    }
  }
  hashFunction(key) {
    return [...key].reduce((acc, curr) => acc+curr.charCodeAt(0), 0) % this.bucketSize;
  }
  get(key) {
    let hashedKey = this.hashFunction(key);
    return this.bucket[hashedKey].get(key);
  }
  set(key, value) {
    let hashedKey = this.hashFunction(key);
    this.bucket[hashedKey].set(key, value);
  }
}

class SimpleDict {
  constructor() {
    this.key = [];
    this.value = [];
  }
  get(key) {
    for(let i = 0; i < this.key.length; i++) {
      if(key === this.key[i]) {
        return this.value[i]
      }
    }
  }
  set(key, value) {
    this.key.push(key);
    this.value.push(value);
  }
}
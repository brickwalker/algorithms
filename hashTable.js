class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(7);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    this.dataMap[index] = this.dataMap[index] || [];
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    const arr = this.dataMap[index];
    if (arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === key) {
          return arr[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          keys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return keys;
  }
}

let myHashTable = new HashTable();
console.log(myHashTable);
console.log(myHashTable.set("boat", 1));
console.log(myHashTable.set("fish", 2));
console.log(myHashTable.get("fish"));
console.log(myHashTable.get("shark"));
console.log(myHashTable.keys());

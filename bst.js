class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (temp) {
      if (value === temp.value) {
        return undefined;
      }
      if (value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  constains(value) {
    let temp = this.root;
    while (temp) {
      if (temp.value === value) {
        return true;
      } else if (temp.value > value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }
    return false;
  }

  minValueNode(currentNode){
    while (currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode;
  }
}

myBst = new BST();

myBst.insert(10);
myBst.insert(5);
myBst.insert(15);
myBst.insert(14);
myBst.insert(16);

console.log(JSON.stringify(myBst, null, 4));
console.log(myBst.insert(16));
console.log(myBst.constains(10));
console.log(myBst.constains(16));
console.log(myBst.constains(15));
console.log(myBst.constains(777));
console.log(myBst.minValueNode(myBst.root));
console.log(myBst.minValueNode(myBst.root.right));
console.log(myBst.minValueNode(myBst.root.left));
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

  minValueNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  BFS() {
    const currentNode = this.root;
    const queue = [];
    const results = [];
    queue.push(currentNode);

    while (queue.length) {
      const currentNode = queue.shift();
      results.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return results;
  }

  DFSPreOrder() {
    const results = [];
    function traverse(node) {
      results.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    const results = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      results.push(node.value);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    const results = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      results.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return results;
  }
}

myBst = new BST();

myBst.insert(47);
myBst.insert(21);
myBst.insert(76);
myBst.insert(18);
myBst.insert(27);
myBst.insert(52);
myBst.insert(82);

console.log(myBst.DFSInOrder());

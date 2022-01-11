class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return undefined;
    }
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myStack = new Stack(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.pop());
console.log(myStack);
myStack.pop();
myStack.pop();

console.log(myStack);

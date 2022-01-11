class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(1);

console.log(myQueue);
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log("DQ", myQueue.dequeue());
console.log(myQueue);
console.log("DQ", myQueue.dequeue());
console.log(myQueue);
console.log("DQ", myQueue.dequeue());
console.log(myQueue);
console.log("DQ", myQueue.dequeue());
console.log(myQueue);

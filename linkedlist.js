class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const baseNode = new Node(value);
    this.head = baseNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    const poppedNode = this.tail;
    let prevNode = this.head;
    while (prevNode.next && prevNode.next !== poppedNode) {
      prevNode = prevNode.next;
    }
    this.tail = prevNode;
    prevNode.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return poppedNode;
  }
}

const myLinkedList = new LinkedList(1);

console.log("NEW", myLinkedList);

myLinkedList.push(2);
myLinkedList.push(3);

console.log("PUSH TWO", myLinkedList);

console.log("POPPED", myLinkedList.pop());
console.log("POPPED", myLinkedList.pop());
console.log("POPPED", myLinkedList.pop());
console.log("AFTER POP", myLinkedList);

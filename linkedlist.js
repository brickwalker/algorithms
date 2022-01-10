class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const myNode = new Node(value);
    this.head = myNode;
    this.tail = this.head;
    this.length = 1;
  }
}

const myLinkedList = new LinkedList(4);

console.log(myLinkedList);

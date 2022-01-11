class DoublyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new DoublyNode(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }
}

const dLinkList = new DoublyLinkedList(1);

console.log(dLinkList);

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

  push(value) {
    const node = new DoublyNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    const temp = this.tail;
    if (!temp) {
      return undefined;
    } else if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
}

const dLinkList = new DoublyLinkedList(1);
dLinkList.push(2);
console.log(dLinkList.pop());
console.log(dLinkList.pop());
console.log(dLinkList.pop());
console.log(dLinkList);

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

  unshift(value) {
    const newNode = new Node(value);
    const next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    newNode.next = next;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const shiftedNode = this.head;
    this.head = this.head.next;
    shiftedNode.next = null;
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    return shiftedNode;
  }

  get(value) {
    if (!this.head) {
      return undefined;
    } else {
      let pointer = this.head;
      while(pointer.value !== value) {
        pointer = pointer.next;
        if (pointer === null) {
          return undefined;
        }
      }
      return pointer;
    }
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    for(let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.pop()

console.log("GET NON-EXISTENT", myLinkedList.get(11));

myLinkedList.push(2);
myLinkedList.push(11);
myLinkedList.push(3);

console.log("GET", myLinkedList.get(11));
console.log("GET by Index OOB", myLinkedList.getByIndex(11));
console.log("GET by Index", myLinkedList.getByIndex(1));



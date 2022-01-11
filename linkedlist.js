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

  set(index, value) {
    const node = this.getByIndex(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value)
    } else {
      const node = new Node(value);
      const prev = this.getByIndex(index - 1);
      node.next = prev.next;
      prev.next = node;
      this.length++
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop()
    } else {
      const prev = this.getByIndex(index - 1);
      const curr = prev.next;
      prev.next = curr.next;
      curr.next = null;
      this.length--
    }
    return true;
  }

  reverse() {
    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = temp.next;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2)
myLinkedList.push(3)

console.log("LIST", myLinkedList);
console.log("REMOVE", myLinkedList.remove(1));
console.log("LIST", myLinkedList);
console.log("REMOVE", myLinkedList.remove(0));
console.log("LIST", myLinkedList);
console.log("REMOVE", myLinkedList.remove(0));
console.log("LIST", myLinkedList);
console.log("REMOVE", myLinkedList.remove(0));
console.log("LIST", myLinkedList);

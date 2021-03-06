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

  unshift(value) {
    const node = new DoublyNode(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    const temp = this.head;
    if (!this.head) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.head;
    } else if (index === this.length - 1) {
      return this.tail;
    }
    let node;
    if (index < this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        node = node.prev;
      }
    }

    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
    }
    return node;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new DoublyNode(value);
      const after = this.get(index);
      const before = after.prev;
      newNode.next = after;
      newNode.prev = before;
      before.next = newNode;
      after.prev = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    }
    const node = this.get(index);
    if (node) {
      const prev = node.prev;
      const next = node.next;
      node.prev.next = next;
      node.prev = null;
      next.prev = prev;
      node.next = null;
      this.length--;
    }
    return node;
  }
}

const dLinkList = new DoublyLinkedList(1);
dLinkList.push(2);
dLinkList.push(3);

console.log(dLinkList.remove(15));
console.log(dLinkList.remove(1));
console.log(dLinkList.remove(1));
console.log(dLinkList.remove(0));
console.log(dLinkList.remove(0));
console.log(dLinkList);

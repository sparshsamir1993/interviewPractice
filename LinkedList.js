class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    let node = new Node(value, null, null);
    if (!this.head && !this.next) {
      this.head = node;
      this.tail = node;
      // node.next = this.tail;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addToTail(value) {
    let node = new Node(value, null, null);
    if (!this.head && !this.next) {
      this.head = node;
      node.next = this.tail;
    } else {
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
    }
  }

  displayLinkedList() {
    let start = this.head;
    let current = start;
    do {
      if (current == null) {
        return;
      }
      console.log(current.value + "->");
      current = current.next;
    } while (current && current.next != null);
    if (current && current.next == null) {
      console.log(current.value + "->");
    }
  }
}

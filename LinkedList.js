class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
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
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
    }
  }

  removeAllOccurance(val) {
    let count = 0;
    if (this.head == this.tail && this.head != null) {
      if (this.head.value === val) {
        this.head = null;
        this.tail = null;
      }
    }
    if (this.head == null) {
      return;
    }
    if (this.head.next == null) {
      return;
    }
    let current = this.head?.next;
    let prev = this.head;
    while (current) {
      if (prev == this.head && this.head.value == val) {
        this.head = current;
        prev.next = null;
        current = current.next;
        prev = this.head;
      } else if (current.value == val) {
        if (current.next == null) {
          prev.next = null;
          this.tail = prev;
          current = prev;
          current = current.next;
        } else {
          prev.next = current.next;
          current.next = null;
          current = prev.next;
        }
      } else {
        current = current.next;
        prev = prev.next;
      }
    }
    if (
      prev &&
      prev.next == null &&
      prev == this.head &&
      this.head == this.tail &&
      prev.value == val
    ) {
      this.head = null;
      this.tail = null;
    }
  }

  removeFromTail() {
    let current = this.head;
    let count = 0;
    let secondPointer;
    while (current && current.next != null) {
      count++;
      if (count == 2) {
        secondPointer = this.head;
      }
      if (count > 1) {
        secondPointer = secondPointer.next;
      } else {
        secondPointer = this.head;
      }
      current = current.next;
    }

    console.log(secondPointer);
    this.tail = secondPointer;
    secondPointer.next = null;
    console.log("deleted:  " + current.value);
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

import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = new Node("Head");
  }

  getHead() {
    return this.head;
  }
  getTail(node) {
    if (!node) return "undefined";
    if (node.getNext() === null) return node;
    return this.getTail(node.getNext());
  }
  get() {
    console.log(this.head);
  }
  setHead(node) {
    this.head = node;
  }
  setTail(node) {
    this.tail = node;
  }

  append(value) {
    if (this.head.getNext() === null) {
      this.head.next = new Node(value);
    } else {
      this.getTail(this.head).setNext(new Node(value));
    }
  }
}

const list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");
list.get();

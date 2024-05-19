class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  setNext(node) {
    this.next = node;
  }
}

export default Node;

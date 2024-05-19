import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = new Node("Head");
  }

  getHead() {
    return this.head.next;
  }
  getTail(node = this.head) {
    //Wanted to try a recursive method
    if (!node) return "undefined";
    if (node.getNext() === null) return node;
    return this.getTail(node.getNext());
  }
  get() {
    console.log(this.head);
  }

  append(value) {
    if (this.head.getNext() === null) {
      this.head.next = new Node(value);
    } else {
      this.getTail().setNext(new Node(value));
    }
  }

  prepend(value) {
    if (this.head.getNext() === null) {
      this.head.next = new Node(value);
    } else {
      const temp = this.head.next;
      this.head.next = new Node(value, temp);
    }
  }
  size() {
    // wanted to try an iterative method
    if (this.head.next === null) return "Empty";
    let count = 0;
    let checkNext = true;
    let current = this.head.getNext();

    while (checkNext) {
      if (current.getNext() != null) {
        count++;
        current = current.getNext();
      } else {
        count++;
        checkNext = false;
      }
    }
    return count;
  }

  at(index) {
    //index starts at 0
    if (this.head.next === null) return "Empty";
    if (index === 0) return this.head.next;
    let count = 0;
    let checkNext = true;
    let current = this.head.getNext();
    let node = null;

    while (checkNext) {
      if (current.getNext() != null) {
        if (count === index) return current;
        count++;
        current = current.getNext();
      } else return "undefined";
    }
  }
  pop() {
    if (this.head.next === null) return "Empty";
    let checkNext = true;
    let current = this.head.getNext();
    let prev = null;

    while (checkNext) {
      if (current.getNext() != null) {
        prev = current;
        current = current.getNext();
        if (current.getNext() == null) {
          prev.setNext(null);
        }
      } else {
        checkNext = false;
      }
    }
  }
  contains(value) {
    if (this.head.next === null) return "Empty";
    let checkNext = true;
    let current = this.head.getNext();
    let prev = null;

    while (checkNext) {
      if (current.getNext() != null) {
        if (current.getValue() === value) {
          return true;
        }
        current = current.getNext();
      } else {
        checkNext = false;
      }
    }
    return false;
  }

  find(value) {
    if (this.head.next === null) return "Empty";
    let checkNext = true;
    let current = this.head.getNext();

    while (checkNext) {
      if (current.getNext() != null) {
        if (current.getValue() === value) {
          return current;
        }
        current = current.getNext();
      } else {
        checkNext = false;
      }
    }
    return null;
  }
  toString() {
    if (this.head.next === null) return "Empty";
    let checkNext = true;
    let current = this.head.getNext();
    let string = "";

    while (checkNext) {
      if (current.getNext() != null) {
        string += `( ${current.getValue()} ) -> `;
        current = current.getNext();
      } else {
        string += `( ${current.getValue()} ) -> null`;
        checkNext = false;
      }
    }
    return string;
  }
}

const list = new LinkedList();
list.append("A");
list.append("B");
list.append("C");

list.get();
console.log(list.size());
console.log(list.toString());
list.prepend("1");
list.get();
console.log(list.size());
console.log(list.at(1));
console.log(list.toString());
list.pop();
list.get();
console.log(list.contains("A"));
console.log(list.contains("z"));
console.log(list.find("A"));
console.log(list.find("z"));
console.log(list.toString());

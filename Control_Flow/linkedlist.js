class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };

    if(this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while(this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currNode = this.head;

    while (currNode.next) {
      if(currNode.next.value === value ) {
        currNode.next = currNode.next.next;
      } else {
        currNode = currNode.next;
      }
    }

    if(this.tail.value === value) {
      this.tail = currNode;
    }
  }

  toArray() {
    const elements = [];

    let currNode = this.head;
    while (currNode) {
      elements.push(currNode);
      currNode = currNode.next;
    }

    return elements;
  }
}

const linkedList1 = new LinkedList();

linkedList1.prepend(21);
linkedList1.append("Rudolph");
linkedList1.append("Lee");
linkedList1.prepend("Dolphius");
linkedList1.prepend("Dolphius");
linkedList1.delete("Dolphius");

console.log(linkedList1.toArray());


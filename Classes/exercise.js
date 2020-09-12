const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(value) {
    const items = _items.get(this);

    items.push(value);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error('Stack is empty.');
    }
    return items.pop();
  }

  peek() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error('Stack is empty.');
    }
    return items[items.length - 1];
  }

  get count() {
    const items = _items.get(this);
    return items.length;
  }
}

const stact = new Stack();

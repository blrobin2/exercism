module.exports = class Node {
  constructor(prev = null, value = null, next = null) {
    this.prev = prev;
    this.value = value;
    this.next = next;
  }

  push(value) {
    let last = this;
    while (last.next) {
      last = last.next;
    }
    last.next = new Node(last, value, null);
  }

  pop() {
    let last = this;
    while (last.next) {
      last = last.next;
    }
    const value = last.value;
    if (last.prev) {
      last.prev.next = null;
    }
    return value;
  }

  shift() {
    const value = this.next.value;
    this.next = this.next.next;
    if (this.next) {
      this.next.prev = this;
    }
    return value;
  }

  unshift(value) {
    let currentFirst = null;
    if (this.next) {
      currentFirst = this.next;
    }
    const newNode = new Node(this, value, currentFirst);
    this.next = newNode;
    if (currentFirst) {
      currentFirst.prev = newNode;
    }
  }

  count() {
    let count = 0;
    let curr = this;
    while (curr.next) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  delete(value) {
    let curr = this;
    while (curr.next) {
      curr = curr.next;
      if (curr && curr.value === value) {
        const prev = curr.prev;
        const next = curr.next;
        if (prev) {
          prev.next = next;
        }
        if (next) {
          next.prev = prev;
        }
      }
    }
  }
}
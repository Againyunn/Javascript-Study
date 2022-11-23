class Node {
  constructor(el, link = null) {
    this.data = el;
    this.link = link;
  }
}

export class CircularLinkedQueue {
  constructor() {
    this.tail = null;
  }

  isEmpty() {
    return this.tail === null;
  }

  clear() {
    this.tail = null;
  }

  peek() {
    if (this.isEmpty() === false) {
      return this.tail.link.data;
    }
  }

  enqueue(el) {
    let node = new Node(el);

    if (this.isEmpty()) {
      node.link = node;
      this.tail = node;
    } else {
      node.link = this.tail.link;
      this.tail.link = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.isEmpty() === false) {
      let data = this.tail.link.data;

      if (this.tail.link === this.tail) {
        this.tail = null;
      } else {
        this.tail.link = this.tail.link.link;
      }
      return data;
    }
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    } else {
      let count = 1;
      let node = this.tail.link;

      // node가 여러 개인 경우
      while (node !== this.tail) {
        node = node.link;
        count += 1;
      }
      return count;
    }
  }

  display() {
    if (this.isEmpty() === false) {
      let node = this.tail.link;
      let result = "";

      while (node !== this.tail) {
        result += ` ${node.data}`;
        node = node.link;
      }
      result += ` ${node.data}`;
      return result;
    }
  }
}

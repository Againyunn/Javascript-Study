class Node {
  constructor(el, link = null) {
    this.data = el;
    this.link = link;
  }
}

export class LinkedStack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top == null;
  }

  clear() {
    this.top = null;
  }

  push(el) {
    let node = new Node(el, this.top);
    this.top = node;
    // console.log("node: ", node);
  }

  pop() {
    if (!this.isEmpty()) {
      let node = this.top;
      this.top = node.link;
      return node.data;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      let node = this.top;
      return node.data;
    }
  }

  size() {
    // console.log("this.top: ", this.top);
    let node = this.top;
    let count = 0;

    while (node !== null) {
      node = node.link;
      count += 1;
      console.log("node: ", node);
    }
    return count;
  }

  getAllList() {
    let result = [];

    let node = this.top;

    while (node !== null) {
      result.push(node.data);
      node = node.link;
    }
    return result;
  }
}

/**
 * 
 실제로 this.top에 저장되는 형태:

 ex)
    Node {
        data: 3,
        link: Node { data: 2, link: Node { data: 1, link: null } }
    } 
 
 */

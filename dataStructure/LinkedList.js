class Node {
  constructor(el, link = null) {
    this.data = el;
    this.link = link;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * (boolean)check if node is empty
   * @returns boolean
   */
  isEmpty() {
    return this.head == null;
  }

  /**
   * (void)reset node
   */
  clear() {
    this.head = null;
  }

  /**
   * (int)get node's total index
   * @returns index number
   */
  size() {
    let node = this.head;
    let count = 0;

    while (node !== null) {
      node = node.link;
      count += 1;
    }

    return count;
  }

  /**
   * (string)get all node's data
   * @returns string type of all node's data
   */
  display() {
    let node = this.head;
    let result = "";

    while (node !== null) {
      result += `${node.data} `;
      node = node.link;
    }
    return result;
  }

  /**
   * (Node)get pos index node
   * @param {*int} pos
   * @returns node
   */
  getNode(pos) {
    if (pos < 0) return false;

    let node = this.head;

    while (pos > 0 && node !== null) {
      pos -= 1;
      node = node.link;
    }
    return node;
  }

  /**
   * (any)get pos index node's data
   * @param {*int} pos
   * @returns node.data
   */
  getEntry(pos) {
    let node = this.getNode(pos);
    if (node === null) return false;
    return node.data;
  }

  /**
   * (void)replace specific index the node' data
   * @param {*any} el
   * @param {*int} pos
   */
  replace(el, pos) {
    let node = this.getNode(pos);
    if (node !== null) node.data = el;
  }

  /**
   * (void)add new node on pos index position
   * @param {*any} el
   * @param {*int} pos
   */
  insert(el, pos) {
    let before = this.getNode(pos - 1);

    // 최초 삽입인 경우
    if (before === null) this.head = new Node(el, this.head);
    // 그외의 경우
    else {
      let node = new Node(el, before.link);
      before.link = node;
    }
  }
  /**
   * (void)delete pos index in node
   * @param {*int} pos
   */
  delete(pos) {
    let before = this.getNode(pos - 1);

    if (before === null || before === false) {
      if (this.head !== null) {
        this.head = this.head.link;
      }
    } else if (before.link !== null) {
      before.link = before.link.link;
    }
  }
}

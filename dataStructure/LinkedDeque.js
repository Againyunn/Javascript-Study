class Node {
  constructor(el, prev = null, next = null) {
    this.data = el;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedDequeue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    return this.front == null;
  }

  clear() {
    this.front = null;
  }

  size() {
    if (this.isEmpty()) {
      return 0;
    } else {
      let node = this.front;
      let count = 0;

      while (node !== null) {
        count += 1;
        node = node.next;
      }
      return count;
    }
  }

  display() {
    if (!this.isEmpty()) {
      let node = this.front;

      let result = "";

      while (node !== null) {
        result += ` ${node.data}`;
        node = node.next;
      }

      return result;
    }
  }

  addFront(el) {
    let node = new Node(el, null, this.front);
    if (this.isEmpty()) {
      this.front = this.rear = node;
    } else {
      this.front.prev = node;
      this.front = node;
    }
  }

  addRear(el) {
    let node = new Node(el, this.rear, null);

    if (this.isEmpty()) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  deleteFront() {
    if (!this.isEmpty()) {
      let data = this.front.data;

      this.front = this.front.next;

      if (this.front == null) {
        this.rear = null;
      } else {
        this.front.prev = null;
      }
      return data;
    }
  }

  deleteRear() {
    if (!this.isEmpty()) {
      let data = this.rear.data;

      this.rear = this.rear.prev;

      if (this.rear === null) {
        this.front = null;
      } else {
        this.rear.next = null;
      }
      return data;
    }
  }
}

/**
 * 구조 서술:
 * 
 * ex)
 * front: Node {
        data: 12,
        prev: null,
        next: Node { data: 13,
            prev:  [ 
                        Node {
                            data: 11,
                            prev: null,
                            next: null
                        }
                    
                    ]
            , next: null }
        }
 *
 */

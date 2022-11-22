export class PriorityQueue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  findMaxIndex() {
    if (this.isEmpty()) {
      return false;
    } else {
      let highest = 0;

      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i] > this.items[highest]) {
          highest = i;
        }
      }
      return highest;
    }
  }

  dequeue() {
    let highest = this.findMaxIndex();

    // 알고리즘 문제 풀이시 절대 falsy한 값을 조건문의 조건으로 넣지 않는다!!
    if (highest !== false) {
      return this.items.splice(highest, 1);
    }
  }

  peek() {
    let highest = this.findMaxIndex();
    if (!!highest) {
      return this.items[highest];
    }
  }
}

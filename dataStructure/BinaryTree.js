import * as circularQueue from "./CircularQueue.js";

export class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  // 전위 순회
  preOrder(node) {
    // let result = "";
    if (node !== null) {
      // result += `${node} `
      console.log(node);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  // 중위 순회
  inOrder(node) {
    // let result = "";
    if (node !== null) {
      this.inOrder(node.left);
      // result += `${node}`
      console.log(node);
      this.inOrder(node.right);
    }
  }

  // 후위 순회
  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node);
    }
  }

  levelOrder(root) {
    let queue = circularQueue.CircularQueue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      if (node !== null) {
        console.log(node);
        queue.enqueue(node.left);
        queue.enqueue(node.right);
      }
    }
  }

  // 노드 개수 반환 함수
  countNode(node) {
    if (node === null) {
      return 0;
    } else {
      return 1 + this.countNode(node.left) + this.countNode(node.right);
    }
  }

  // 단말 노드 개수 반환 함수
  countLeaf(node) {
    if (node === null) {
      return 0;
    } else if (node.left === null && node.right === null) {
      return 1;
    } else {
      return this.countLeaf(node.left) + this.countLeaf(node.right);
    }
  }

  // 노드 높이 반환 함수
  calculateHeight(node) {
    if (node === null) {
      return 0;
    }
    let heightLeft = this.calculateHeight(node.left);
    let heightRight = this.calculateHeight(node.right);

    if (heightLeft > heightRight) {
      return heightLeft + 1;
    } else {
      return heightRight + 1;
    }
  }
}

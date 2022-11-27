class MaxHeap {
  constructor() {
    this.heap = [];
    this.heap.push(0); // index 0은 사용하지 않으므로 0을 가장 먼저 입력하여 시작 index를 1로 설정
  }

  // 힙의 사이즈 반환
  size() {
    return this.heap.length - 1;
  }

  // 힙이 비어있는 지 체크
  isEmpty() {
    return this.size() === 0;
  }

  // 부모 노드를 반환
  Parent(i) {
    return this.heap[i / 2];
  }

  // 왼쪽 자식 노드 반환
  LeftChild(i) {
    return this.heap[i * 2];
  }

  // 오른쪽 자식 노드 반환
  RightChild(i) {
    return this.heap[i * 2 + 1];
  }

  // 힙의 원소들 반환
  Display() {
    let result = "";
    for (var i = 1; i < this.heap.length; i++) {
      result += this.heap[i];
    }
    return result;
  }

  // 노드 삽입
  Insert(node) {
    this.heap.push(node);

    let i = this.size();

    // index가 루트가 아니고, node가 부모 node보다 크면 반복(부모 노드를 끌어내리는 코드 이므로)
    while (i !== 1 && node > this.Parent(i)) {
      this.heap[i] = this.Parent(i);
      i = i / 2;
    }

    this.heap[i] = node;
  }

  // 노드 삭제
  Delete() {
    let parent = 1;
    let child = 2;

    if (!this.isEmpty()) {
      let heapRoot = this.heap[1];
      let last = this.heap[this.size()];

      while (child <= this.size()) {
        if (
          child < this.size() &&
          this.LeftChild(parent) < this.RightChild(parent)
        ) {
          child += 1;
        }
        if (last >= this.heap[child]) break;

        this.heap[parent] = this.heap[child];
        parent = child;
        child *= 2;
      }

      this.heap[parent] = last;
      this.heap.pop();
      return heapRoot;
    }
  }
}

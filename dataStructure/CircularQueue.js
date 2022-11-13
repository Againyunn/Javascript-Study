const MAX_QSIZE = 10;

let front = 0;
let rear = 0;
let queue = Array(10).fill(null);

export function isEmpty() {
  return front === rear;
}

export function isFull() {
  return front === (rear + 1) % MAX_QSIZE;
}

export function clear() {
  front = rear;
}

export function enqueue(item) {
  if (!isFull()) {
    rear = (rear + 1) % MAX_QSIZE;
    queue[rear] = item;
  }
}

export function dequeue() {
  if (!isEmpty()) {
    front = (front + 1) % MAX_QSIZE;
    return queue[front];
  }
}

export function peek() {
  if (!isEmpty()) {
    return queue[(front + 1) % MAX_QSIZE];
  }
}

export function size() {
  // Math.abs()를 사용할 수도 있지만, 단순 사칙연산만으로도 구현이 가능
  return (rear - front + MAX_QSIZE) % MAX_QSIZE;
}

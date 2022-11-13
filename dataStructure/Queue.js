let queue = [];

export function isEmpty() {
  return queue.length === 0;
}

export function enqueue(item) {
  queue.push(item);
}

export function dequeue() {
  if (!isEmpty()) {
    return queue.pop(0);
  }
}

export function peek() {
  if (!isEmpty()) {
    return queue[0];
  }
}

export function size() {
  return queue.length;
}

export function clear() {
  queue = [];
}

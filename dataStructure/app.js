import * as Stack from "./Stack.js";
import * as Queue from "./Queue.js";
import * as CircularQueue from "./CircularQueue.js";

/**Stack */
// Stack.pushItem(1);
// Stack.pushItem(2);
// Stack.pushItem(3);

// Stack.deleteItem();

// let result = Stack.peekItem();

// Stack.clear();

// console.log(result);
// console.log(Stack.size());

/**Qeueu */
// Queue.enqueue(1);
// Queue.dequeue();

// Queue.enqueue(2);
// console.log(Queue.peek());

// Queue.clear();

// let result = Queue.size();
// console.log(result);

/**Circular Queue */
CircularQueue.enqueue(1);
CircularQueue.enqueue(2);
CircularQueue.enqueue(3);

console.log(CircularQueue.dequeue());

console.log(CircularQueue.peek());

console.log(CircularQueue.size());

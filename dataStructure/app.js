import * as Stack from "./Stack.js";
import * as Queue from "./Queue.js";
import * as CircularQueue from "./CircularQueue.js";
import * as PriorityQueue from "./PriorityQueue.js";
import * as LinkedStack from "./LinkedStack.js";
import * as LinkedList from "./LinkedList.js";
import * as CircularLinkedQueue from "./CircularLinkedQueue.js";
import * as LinkedDequeue from "./LinkedDeque.js";
import * as Sort from "./Sort.js";
import * as BinarySearch from "./BinarySearch.js";

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
// CircularQueue.enqueue(1);
// CircularQueue.enqueue(2);
// CircularQueue.enqueue(3);

// console.log(CircularQueue.dequeue());

// console.log(CircularQueue.peek());

// console.log(CircularQueue.size());

/** Priority Queue */
// const queue = new PriorityQueue.PriorityQueue();
// queue.enqueue(12);
// queue.enqueue(22);
// queue.enqueue(30);
// console.log("Queue list: ", queue.items);

// while (!queue.isEmpty()) {
//   console.log("MAX PRIORITY: ", queue.dequeue());
// }

/** LinkedStack */
// const linkedStack = new LinkedStack.LinkedStack();

// linkedStack.push(1);
// linkedStack.push(2);
// linkedStack.push(3);
// console.log(linkedStack.peek());
// linkedStack.pop();

// console.log(linkedStack.peek());
// linkedStack.push(3);
// linkedStack.push(4);
// console.log(linkedStack.size());

// console.log("all linkedStack's data: ", linkedStack.getAllList());

/** LinkedList */
// const linkedList = new LinkedList.LinkedList();

// linkedList.insert("a", 1);
// linkedList.insert("b", 2);
// linkedList.insert("c", 3);
// console.log(linkedList.display());
// linkedList.delete(0);
// console.log(linkedList.display());

/** CircularLinkedQueue */
// const circularLinkedQueue = new CircularLinkedQueue.CircularLinkedQueue();

// circularLinkedQueue.enqueue(11);
// circularLinkedQueue.enqueue(12);
// circularLinkedQueue.enqueue(13);
// console.log(circularLinkedQueue.peek());
// console.log("dequeue: ", circularLinkedQueue.dequeue());
// console.log(circularLinkedQueue.display());

/** LinkedDequeue */
// const linkedDequeue = new LinkedDequeue.DoublyLinkedDequeue();

// linkedDequeue.addFront(11);
// linkedDequeue.addFront(12);
// console.log(linkedDequeue.display());
// console.log("delete front: ", linkedDequeue.deleteRear());
// console.log(linkedDequeue.display());
// linkedDequeue.addRear(13);
// console.log(linkedDequeue.display());

/** Selection Sort */
// let testArray = [10, 2, 3, 5, 1, 8, 9];
// console.log("" + Sort.SelectionSort(testArray));
// console.log("" + Sort.InsertionSort(testArray));
// console.log("" + Sort.BubbleSort(testArray));

/** Binary Search */
// let testArray = [10, 2, 3, 5, 1, 8, 9];

// console.log(
//   `itenary binary search index: ${BinarySearch.BinarySearch(
//     testArray,
//     2,
//     0,
//     testArray.length - 1
//   )}`
// );

// console.log(
//   `recursive binary search index: ${BinarySearch.BinarySearchRecursive(
//     testArray,
//     2,
//     0,
//     testArray.length - 1
//   )}`
// );

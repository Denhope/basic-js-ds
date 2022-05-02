const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the head element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.headEl = null;
    this.lastEl = null;
    this.count = 0;
  }

  getUnderlyingList() {
    return this.headEl;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.count) {
      this.lastEl.next = newNode;
    } else {
      this.headEl = newNode;
    }

    this.lastEl = newNode;
    this.count++;
    return this;
  }

  dequeue() {
    const delEl = this.headEl;
    this.headEl = this.headEl.next;
    return delEl.value;
  }
}

module.exports = {
  Queue,
};

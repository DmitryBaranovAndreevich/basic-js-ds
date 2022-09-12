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
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.state = null;
  }
  getUnderlyingList() {
    return this.state;
  }

  enqueue(value) {
    function add(node, value) {
      if (!node.next) node.next = new ListNode(value);
      else add(node.next, value);
    }
    if (!this.state) this.state = new ListNode(value);
    else add(this.state, value);
  }

  dequeue() {
    const res = this.state.value;
    this.state = this.state.next;
    return res;
  }
}

module.exports = {
  Queue,
};

const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.len = 0;
  }

  get size() {
    return this.len;
  }

  enqueue(element) {
    if (this.len === 0) {
      this.value = element;
      this.next = null;
      this.len++;
    } else {
      let pre = this;
      let cur = pre.next;
      while (cur !== null) {
        pre = cur;
        cur = cur.next;
      }
      const node = new ListNode(element);
      pre.next = node;
      this.len++;
    }
  }

  dequeue() {
    if (this.len === 0) { return undefined; }
    if (this.len === 1) {
      const output = this.value;
      this.value = null;
      this.len = 0;
      return output;
    }
    const output = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    this.len--;
    return output;
  }
}

module.exports = Queue;

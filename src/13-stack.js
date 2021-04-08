/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
  }

  pop() {
    const top = this.peek();
    if (top !== undefined) this.arr.pop();
    return top;
  }

  peek() {
    const len = this.arr.length;
    if (len === 0) { return undefined; }
    return this.arr[len - 1];
  }
}

module.exports = Stack;

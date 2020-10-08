class Stack {

  constructor() {
    this.storage = {};
  }

  size() {
    var counter = 0;
    while (this.storage[counter]) {
      counter++;
    }
    return counter;
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    var deleted = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return deleted;
  }
}
var stack = new Stack;
class Queue {
  constructor() {
    this.storage = {};
  }

  size() {
    var counter = 0;
    while (this.storage[counter]){
      counter++;
    }
    return counter;
  }

  enqueue(value) {
    var tempObj = {};
    for (var i = this.size(); i > 0; i--) {
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
  }

  dequeue() {
    var deleted = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return deleted;
  }
}
var queue = new Queue;

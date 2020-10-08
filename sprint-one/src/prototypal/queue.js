var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {

  size: function() {
    var counter = 0;
    while (this.storage[counter]){
      counter++;
    }
    return counter;
  },

  enqueue: function(value) {
    var tempObj = {};
    for (var i = this.size(); i > 0; i--) {
      this.storage[i] = this.storage[i-1];
    }
    this.storage[0] = value;
  },

  dequeue: function() {
    var deleted = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return deleted;
  }
};



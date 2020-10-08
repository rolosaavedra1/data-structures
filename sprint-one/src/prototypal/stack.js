var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};

  return newStack;
};

var stackMethods = {

  size: function () {
    var counter = 0;
    while (this.storage[counter]) {
      counter++;
    }
    return counter;
  },

  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function () {
    var deleted = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return deleted;
  }
};



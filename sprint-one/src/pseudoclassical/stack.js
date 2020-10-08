var Stack = function() {
  this.storage = {};
};

Stack.prototype.size = function () {
  var counter = 0;
  while (this.storage[counter]) {
    counter++;
  }
  return counter;
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function () {
  var deleted = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return deleted;
};
var stack = new Stack;




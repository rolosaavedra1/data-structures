var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function () {
  var counter = 0;
  while (this.storage[counter]) {
    counter++;
  }
  return counter;
};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function () {
  var deleted = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return deleted;
};



var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  var counter = 0;
  while (this.storage[counter]){
    counter++;
  }
  return counter;
};

queueMethods.enqueue = function(value) {
  var tempObj = {};
  for (var i = this.size(); i > 0; i--) {
    this.storage[i] = this.storage[i-1];
  }
  this.storage[0] = value;
};

queueMethods.dequeue = function() {
  var deleted = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return deleted;
};








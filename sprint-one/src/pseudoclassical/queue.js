var Queue = function() {
  this.storage = {};
};

Queue.prototype.size = function() {
  var counter = 0;
  while (this.storage[counter]){
    counter++;
  }
  return counter;
};

Queue.prototype.enqueue = function(value) {
  var tempObj = {};
  for (var i = this.size(); i > 0; i--) {
    this.storage[i] = this.storage[i-1];
  }
  this.storage[0] = value;
};

Queue.prototype.dequeue = function() {
  var deleted = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return deleted;
};



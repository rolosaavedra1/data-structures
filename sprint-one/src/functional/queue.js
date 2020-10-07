var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage =  {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var tempObj = {};
    for (var i = someInstance.size(); i > 0; i--) {
      someInstance.storage[i] = someInstance.storage[i-1];
    }
    someInstance.storage[0] = value;
  };

  someInstance.dequeue = function() {
    var deleted = someInstance.storage[someInstance.size() - 1];
    delete someInstance.storage[someInstance.size() - 1];
    return deleted;
  };

  someInstance.size = function() {
    var counter = 0;
    while (someInstance.storage[counter]){
      counter++;
    }
    return counter;
  };

  return someInstance;
};

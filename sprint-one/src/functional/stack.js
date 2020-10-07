var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  someInstance.storage =  {};
  // Implement the methods below
  someInstance.push = function(value) {
    //run someInstance.size
    //store new value on obj[size]
    someInstance.storage[someInstance.size()] = value;
  };
  someInstance.pop = function() {
    //run someInstance.size
    //delete obj[size-1]
    var deleted = someInstance.storage[someInstance.size() - 1];
    delete someInstance.storage[someInstance.size() - 1];
    return deleted;
  };
  someInstance.size = function() {
    //run a while loop, go through every instance of the storage object
    //when reach undefined, return counter
    var counter = 0;
    while (someInstance.storage[counter]) {
      counter++;
    }
    return counter;
  };
  return someInstance;
};




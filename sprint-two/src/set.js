var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // O(1)
  //set is simply an object where the key = obj[key], so add it accordingly
  this.storage[item] = item;
};

setPrototype.contains = function(item) { // O(1)
  //check if object has the property, return boolean
  return this.storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) { // O(1)
  // delete property from object
  delete this.storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


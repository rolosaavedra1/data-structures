

var HashTable = function() {
  // sets size of container array
  this._limit = 8;
  // LimitedArray function creates array of size this._limit
  // To use LimitedArray:
  //LimitedArray.get(i) = array[i]
  //LimitedArray.set(i) = (array[i] = x)
  //LimitedArray.each(i) = _.forEach(array, iterator)
  //LimitedArray.checkLimit(i) = returns array itself if index is numeric and not out-of-bounds
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retreive the bucket at the particular storage location if one exists
  var bucket = this._storage.get(index);
  //if the bucket does not exist
  if (!bucket) {
    //create a bucket array
    var bucket = [];
    //insert that bucket into the hash table
    this._storage.set(index, bucket);
  }
  //set an override boolean equal to false
  var override = false;
  //iterate through the bucket to see if there are any conflicting key: value pairs.
  for (var i = 0; i < bucket.length; i++) {
    //create a tuple var
    var tuple = bucket[i];
    //if index 0(the key) of the tuple conflicts
    if (tuple[0] === k) {
      //override index 1(the value) with the new value
      tuple[1] = v;
      //override boolean becomes true
      override = true;
    }
  }
  //if there was no override, push the new tuple in the bucket
  if (!override) {
    bucket.push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retrieves the bucket if one exist
  var bucket = this._storage.get(index);
  //if one does not exist
  if (!bucket) {
    //return undefined
    return undefined;
  }
  //iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    //create a tuple variable to store the bucket at that index
    var tuple = bucket[i];
    //if index 0(the key) in the tuple is equal to the target key
    if (tuple[0] === k) {
      //return index 1(the value) of the tuple
      return tuple[1];
    }
  }
  //if all else fails return undefined
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //retreive the bucket from the specified index in storage
  var bucket = this._storage.get(index);
  //if it's not a bucket
  if (!bucket) {
    //return null
    return null;
  }
  //iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    //create a tuple variable
    var tuple = bucket[i];
    //if the key(k) is inside of the bucket
    if (tuple[0] === k) {
      //get rid of it
      bucket.splice(i, 1);
    }
    //return the value of the tuple
    return tuple[1];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */




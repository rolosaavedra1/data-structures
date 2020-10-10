var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};


BinarySearchTree.prototype.insert = function(number) {
  if (typeof number !== 'number') {
    return undefined;
  }
  // base case
  // if number is greater than this.value and right is null
  if (number > this.value) {
    if (this.right === null) {
      this.right = new BinarySearchTree(number);
    // recursive case :if number is greater than this.value and right isn't null
    } else {
      this.right.insert(number);
    }
    // base case: if lesser and left is null, do opposite side
  } else if (number < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(number);
    // recursive case: if number is greater than this.value and left isn't null
    } else {
      this.left.insert(number);
    }
  }
};

BinarySearchTree.prototype.contains = function(number) {
  // base case
  //base case: if number is greater than this.value and right is null
  var isContained = false;
  if (number === this.value) {
    isContained = true;
  } else if (number > this.value) {
    //recursive case: if number is greater than this.value and right isn't null
    if (this.right) {
      return this.right.contains(number);
    }
  } else if (number < this.value) {
    if (this.left) {
      return this.left.contains(number);
    }
  } //base case: if lesser and left is null, do opposite side else if (number < this.value) {
  return isContained;
};

BinarySearchTree.prototype.depthFirstLog = function(func) {

  //call the callback function on this.value
  //if there is a right val
  //call callback recursively
  //if there is a left val
  //call callback recursively
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


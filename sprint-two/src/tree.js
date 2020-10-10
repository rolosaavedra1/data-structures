var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

//addChild creates a new node with the value passed into it and add it as a child of the current tree
treeMethods.addChild = function(value) {
  //input is the value
  //no edge cases
  //push the value passed to tree into the children array
  this.children.push(Tree(value));
  //no output
};

//determines if the current tree contains a node with the value target
treeMethods.contains = function(target) {
  //input is the value of target
  //create a boolean variable set to false
  //if the root val is equal to the target
  if (this.value === target) {
    //set boolean variable to true
    return true;
  } else {
  //if not iterate through the children
    for (var i = 0; i < this.children.length; i++) {
    //if the element at the current index is equal to target
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  //return true/false boolean variable
  return false;
  //output is the boolean value
};



/*
 * Complexity: What is the time complexity of the above functions?

 O(n)
 */


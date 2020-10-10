var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };
  list.removeHead = function() {
    if (!this.head) {
      return null;
    } else {
      var oldHead = this.head.value;
      this.head = this.head.next;
      return oldHead;
    }
  };
  list.contains = function(target) {
    if (!this.head) {
      return false;
    }
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };
  return list;
};
var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


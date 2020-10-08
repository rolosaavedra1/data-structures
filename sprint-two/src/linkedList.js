var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    // create newnode(value)
    // idea 1
    // iterate through linkedlist object until we reach a node with next = null
    // insert node in the lastnode[next]

    // idea 2
    // if tail node exists (linkedList.tail not undefined) and there's nothing after that
    // change tail node so tailnode[next] = newnode:

    // - changing properties of linkedlist:
        // if there is no head, new node should be head and tail
        // if there is head, new node should be tail


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

    // if a head exists, then head.next is the new head

     if (!this.head) {
      return null;
    } else {
      var oldHead = this.head.value;
      this.head = this.head.next;
      return oldHead;
      }
  };

  list.contains = function(target) {
    // iterate through object, if undefined return false
    // the node being head is an edge case, we can check if node[head] is defined.
    //if not, we just check node[value] === target.
    // if not, call node.contains(node.next)

    // iterative loop,
    // var current node =  head
    // if (current node), go to next node.
    // if current node = target, return true

    if (!this.head) {
      return false;
    }
    var currentNode = this.head;
    while (currentNode){
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

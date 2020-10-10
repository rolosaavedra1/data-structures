// Instantiate a new graph
// Graph should be a collection of nodes. These nodes can be connected or disconnected
var Graph = function() {
  // Create a container for vertices(nodes) {}
  this.nodeList = {};
  // the edges will be stored as the values of each this.nodes[node]
};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //input a value for the node
  //this.nodes[node] = [];
  this.nodeList[node] = [];
  //value of that node is the passed in value
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //input a target value
  return this.nodeList.hasOwnProperty(node);
  //output a boolean
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // iterate through this.nodes, delete any values of this.nodes that contain node
  while (this.nodeList[node]) {
    var adjacentNode = this.nodeList[node].pop();
    if (adjacentNode === undefined) {
      break;
    }
    this.removeEdge(node, adjacentNode);
  }
  // delete this.nodes[node]
  delete this.nodeList[node];
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if this.contains(fromNode) and this.contains(toNode) then:
  if (this.nodeList[fromNode].indexOf(toNode) > -1 && this.nodeList[toNode].indexOf(fromNode) > -1) {
    return true;
  }
  return false;
  // if this.nodes[fromNode] contains toNode and this.nodes[toNodes] contains fromNodes, return true
  // else return false
};
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //input 2 nodes to be connected by an edge
  if (!this.nodeList[fromNode]) {
    this.addNode(fromNode);
  }
  if (!this.nodeList[toNode]) {
    this.addNode(toNode);
  }
  //this.nodes[fromNode] = toNode;
  this.nodeList[fromNode].push(toNode);
  //this.nodes[toNode] = fromNode;
  this.nodeList[toNode].push(fromNode);
};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //input 2 nodes to be disconnected
  if (!this.nodeList[fromNode]) {
    throw 'Source not found';
  }
  if (!this.nodeList[toNode]) {
    throw 'Destination not found';
  }
  //iterate through this.nodes[fromNode], delete toNode
  this.nodeList[fromNode] = this.nodeList[fromNode].filter(vertex => vertex !== toNode);
  //iterate through this.nodes[toNode], delete fromNode
  this.nodeList[toNode] = this.nodeList[toNode].filter(vertex => vertex !== fromNode);
};
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through this.nodes
  for (var node in this.nodeList) {
  //execute cb on the value of the key
    var nodes = Number(node);
    cb(nodes);
  }
};

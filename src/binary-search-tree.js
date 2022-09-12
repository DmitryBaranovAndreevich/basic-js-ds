const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    function addNewNode(node, data) {
      if (data > node.data) {
        if (node.right) addNewNode(node.right, data);
        else node.right = new Node(data);
      } else if (data < node.data) {
        if (node.left) addNewNode(node.left, data);
        else node.left = new Node(data);
      }
    }
    if (!this.rootNode) this.rootNode = new Node(data);
    else addNewNode(this.rootNode, data);
  }

  has(data) {
    function search(node, data) {
      console.log(node);
      if (data > node.data) {
        if (node.right) return search(node.right, data);
        else return false;
      } else if (data < node.data) {
        if (node.left) return search(node.left, data);
        else return false;
      } else return true;
    }
    return search(this.rootNode, data);
  }

  _search(node, data) {
    if (data > node.data) {
      if (node.right) return this._search(node.right, data);
      else return null;
    } else if (data < node.data) {
      if (node.left) return this._search(node.left, data);
      else return null;
    } else return node;
  }

  find(data) {
    return this._search(this.rootNode, data);
  }

  remove(data) {
    function _searchMin(node) {
      if (node.left) return _searchMin(node.left);
      else return node;
    }
    function removenode(node, data) {
      if (node == null) return null;
      else if (data > node.data) {
        node.right = removenode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removenode(node.left, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        let min = _searchMin(node.right);
        node.data = min.data;
        node.right = removenode(node.right, min.data);
        return node;
      }
    }
    this.rootNode = removenode(this.rootNode, data);
  }

  min() {
    function _searchMin(node) {
      if (node.left) return _searchMin(node.left);
      else return node;
    }
    return _searchMin(this.rootNode).data;
  }

  max() {
    function serchMax(node) {
      if (node.right) return serchMax(node.right);
      else return node;
    }
    return serchMax(this.rootNode).data;
  }
}

module.exports = {
  BinarySearchTree,
};

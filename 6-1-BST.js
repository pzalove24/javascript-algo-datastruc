//Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let temp = this.root;
    while (true) {
      if (newNode.value === temp.value) return undefined;
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (this.root === null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
  minimumNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  maximumNode(currentNode) {
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }
}

let myBST = new BinarySearchTree();
myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(16);
myBST.insert(46);
myBST.insert(36);
myBST.insert(75);
myBST.insert(99);
console.log(myBST.contains(76));
console.log(myBST.minimumNode(myBST.root).value);
console.log(myBST.maximumNode(myBST.root).value);

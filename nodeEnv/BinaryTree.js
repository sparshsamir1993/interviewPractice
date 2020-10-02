let prompt = require("readline-sync");

let fs = require("fs");
const { finished } = require("stream");
class Node {
  constructor(value, rightChild, leftChild) {
    this.value = value;
    this.rightChild = rightChild;
    this.leftChild = leftChild;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let nNode = new Node(value);
    if (this.root == null) {
      this.root = nNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < +currentNode.value) {
        if (!currentNode.leftChild) {
          currentNode.leftChild = new Node(value);
          break;
        } else {
          currentNode = currentNode.leftChild;
        }
      }
      if (value >= +currentNode.value) {
        if (!currentNode.rightChild) {
          currentNode.rightChild = new Node(value);
          break;
        } else {
          currentNode = currentNode.rightChild;
        }
      }
    }
  }

  delete(value) {
    let foundNode = this.find(value);
    console.log(foundNode);
    if (foundNode) {
      let { node, prevNode } = foundNode;
      if (node) {
        if (!prevNode) {
          // for root
          if (!node.leftChild && !node.rightChild) {
            this.root = null;
          }
          if (!node.leftChild) {
            this.root = node.rightChild;
          } else if (!node.rightChild) {
            this.root = node.leftChild;
          }
        } else {
          // any node except root
          if (!node.leftChild && !node.rightChild) {
            // leaf node
            if (prevNode.leftChild == node) {
              console.log("left same");
              prevNode.leftChild = undefined;
            } else if (prevNode.rightChild == node) {
              console.log("right same");
              prevNode.rightChild = undefined;
            }
          } else if (!node.leftChild) {
            // doesn't have left child
            prevNode.leftChild = node.rightChild;
          } else if (!node.rightChild) {
            // doesn't have right child
            prevNode.leftChild = node.leftChild;
          } else if (node.rightChild && node.leftChild) {
            // node with both children
            let currentNode = node.rightChild;
            let minNode = currentNode;
            let prevMinNode = node;
            // find min node in right subtree
            while (currentNode) {
              if (currentNode.leftChild) {
                prevMinNode = currentNode;
                currentNode = currentNode.leftChild;
              } else {
                minNode = currentNode;
                break;
              }
            }
            node.value = minNode.value;
            if (!minNode.leftChild && !minNode.rightChild) {
              // no child for min node
              console.log("no left no right");
              console.log(prevMinNode);
              console.log(minNode);
              if (prevMinNode.leftChild == minNode) {
                console.log("removing left");
                prevMinNode.leftChild = undefined;
              }
              if (prevMinNode.rightChild == minNode) {
                console.log("removing right");
                prevMinNode.rightChild = undefined;
              }
            } else if (!minNode.leftChild) {
              // no left child for min node
              console.log("no left");
              minNode.value = minNode.rightChild.value;
              minNode.rightChild = undefined;
            } else if (!minNode.rightChild) {
              // no right child for min node
              console.log(" no right");
              minNode.value = minNode.leftChild.value;
              minNode.leftChild = undefined;
            }
          }
        }
      }
    }
  }
  levelOrderTraversal() {
    // visiiting nodes level by level
    let currentNode = this.root;
    let queue = [];
    let treeString = "\n\n\n";
    if (currentNode == this.root) {
      queue.push(currentNode);

      treeString += currentNode.value + "\n";
    }
    let node = queue.shift();
    while (node) {
      if (node.leftChild) {
        queue.push(node.leftChild);

        treeString += node.leftChild.value + "    ";
      }
      if (node.rightChild) {
        queue.push(node.rightChild);

        treeString += node.rightChild.value + "\n";
      }
      node = queue.shift();
    }
    console.log(treeString);
  }

  inOrderTraversal() {
    // left -> root -> right
    let currentNode = this.root;
    let nodeStack = [];
    while (currentNode || nodeStack.length) {
      if (currentNode) {
        nodeStack.push(currentNode);
      }
      currentNode = currentNode ? currentNode.leftChild : undefined;
      if (!currentNode && nodeStack.length) {
        let poppedNode = nodeStack.pop();
        console.log(poppedNode.value);
        if (!poppedNode.rightChild) {
          continue;
        }
        currentNode = poppedNode.rightChild;
      }
    }
  }
  find(value) {
    value = +value;
    let toReturn = { prevNode: null, node: null };
    if (this.root.value == value) {
      console.log("\n Found at ROOT ! \n");
      toReturn.node = this.root;
      return toReturn;
    }
    let currentNode = this.root;
    let previousOne;
    while (currentNode) {
      let currentValue = currentNode.value;
      if (value == currentValue) {
        console.log("\n Found ! \n");
        toReturn.node = currentNode;
        toReturn.prevNode = previousOne;
        return toReturn;
      } else if (value < currentValue) {
        previousOne = currentNode;
        currentNode = currentNode.leftChild;
      } else if (value > currentValue) {
        previousOne = currentNode;
        currentNode = currentNode.rightChild;
      }
    }
    console.log("Not found!");
    return false;
  }
}

function getUserChoice() {
  let userOpChoice = prompt.question(
    "What do you want to do ?\n1.Add node\n2.Find node\n3.Delete node\n4.Show tree\n5.Level order\n6.InOrder\n"
  );

  return userOpChoice;
}

exports.BinaryTree = () => {
  let restartPrompt = true;
  let firstBT = new BinaryTree();
  firstBT.insert(200);
  firstBT.insert(300);
  firstBT.insert(250);
  firstBT.insert(400);
  firstBT.insert(330);
  firstBT.insert(340);
  firstBT.insert(230);
  firstBT.insert(210);
  firstBT.insert(100);
  firstBT.insert(150);
  firstBT.insert(50);
  firstBT.insert(25);

  do {
    let newNode = prompt.question("Go again ?");
    if (!newNode) {
      continue;
    }
    if (newNode == "n") {
      restartPrompt = false;
      continue;
    }
    let userChoice = getUserChoice();
    let string;
    switch (userChoice) {
      case "1":
        let newNum = prompt.question("What number to add ?");
        firstBT.insert(newNum);
        string = JSON.stringify(firstBT, null, 4);
        console.log(string);
        break;
      case "2":
        let numToFind = prompt.question("What number to find ?");
        firstBT.find(numToFind);
        break;
      case "3":
        let numToDel = prompt.question("What number to Delete ?");
        firstBT.delete(numToDel);
        break;
      case "4":
        string = JSON.stringify(firstBT, null, 4);
        console.log(string);
        break;
      case "5":
        firstBT.levelOrderTraversal();
        break;
      case "6":
        firstBT.inOrderTraversal();
        break;
    }
  } while (restartPrompt);
};

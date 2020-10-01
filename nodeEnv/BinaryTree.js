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
  find(value) {
    value = +value;
    if (this.root.value == value) {
      console.log("\n Found at ROOT ! \n");
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      let currentValue = currentNode.value;
      if (value == currentValue) {
        console.log("\n Found ! \n");
        return;
      } else if (value < currentValue) {
        currentNode = currentNode.leftChild;
      } else if (value > currentValue) {
        currentNode = currentNode.rightChild;
      }
    }
    console.log("Not found!");
  }
}

function getUserChoice() {
  let userOpChoice = prompt.question(
    "What do you want to do ?\n1.Add node\n2.Find node\n"
  );

  return userOpChoice;
}

exports.BinaryTree = () => {
  let restartPrompt = true;
  let firstBT = new BinaryTree();
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
    switch (userChoice) {
      case "1":
        let newNum = prompt.question("What number to add ?");
        firstBT.insert(newNum);
        let string = JSON.stringify(firstBT, null, 4);
        console.log(string);
        break;
      case "2":
        let numToFind = prompt.question("What number to find ?");
        firstBT.find(numToFind);
        break;
    }
  } while (restartPrompt);
};

const BinaryTree = require("./BinaryTree");
const RunAuction = require("./Auctions/RunAuction");
// RunAuction.RunAuction();
// BinaryTree.BinaryTree();

let Patient = require("./Classes/Patient");
let patient1 = new Patient("Sparsh", 26, true);
let patient2 = new Patient("macwan", 22, true);

patient1.setIsLoggedIn(false);
console.log(patient1.getUserDetails());
console.log(patient2.getUserDetails());

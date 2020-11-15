/**
 *          CONTENTS
 *
 *    1. fetch API
 *    2. 'Every' function
 *    3. Bind function
 *    4. Hoisting
 *    5. Map
 *    6. Arrow function
 *
 */

////////////////// fetch API  ////////////////////////

fetch("https://api.chucknorris.iko/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch();

////////////////// Every fucntion  ////////////////////////

var students = ["hemendra", "sunny", "subhash", "nisha", "aditi"];
var students1 = ["demo", "demo1", "demo2"];
var students2 = ["demo3", "demo4", "demo5"];

let checkNameLen = (name) => {
  return name.length > 7;
};

students.every(checkNameLen);
students.filter(checkNameLen);

////////////////// Bind function  ////////////////////////

const employee = {
  name: "Sparsh",
  lastName: "Samir",
  getFullName: () => {
    console.log(`${this.name}  ${this.lastName}`);
  },
};

////////////////// Hoisting  ////////////////////////

console.log(addMe());
console.log(addMe);
var addMe = () => {
  return 4 + 9;
};

let hoist = 10;
(function oops() {
  console.log(hoist); //       returns reference error
  let hoist = 20;
  console.log(hoist);
})();

greeting(); //                       good eveneing
var greeting = function () {
  console.log("Good morning");
};
greeting(); //                      good morning

function greeting() {
  console.log("Good evening");
}
greeting(); //                       good morning

//////////////////  Map  ////////////////////////

let myMap = new Map();
myMap.set(1, "Sparsh");
myMap.set(2, "Samir");
myMap.set(3, "Rubina");
myMap.set(4, "Saharsh");

myMap.forEach((ppl) => console.log(ppl));

//////////////////  Arrow function  ////////////////////////

/**
 *  4 ways functions can be invoked --
 *      a. normal function call
 *      b. Method call
 *      c. with 'call' and 'apply'
 *      d. contructor call using 'new' keyword
 *
 *
 *      'this' keyword represents function context.
 *      With normal function 'this' changes according to how the function is invoked.
 *      With arrow function 'this' always has the value of the outer function that wraps the fucntion
 *
 *
 *      ref : -- https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/
 *
 */

let obj = {
  val: "foo",
  getVal: () => {
    console.log(this);
  },
  getValWithFunc: function () {
    console.log(this);
  },
};
obj.getVal(); //                        window object
obj.getValWithFunc(); //                obj

//*****************************//

let normalFunc = function () {
  console.log(this);
};
let wrapperTest = () => {
  let valCheck = 10;
  let arrowFunc = () => {
    console.log(this);
  };
  return arrowFunc;
};

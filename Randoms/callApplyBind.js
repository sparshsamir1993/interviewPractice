this.num = 10;
this.numArr = [1, 2, 3, 4, 5, 6, 7];
let obj = {
  num: 15,
  numArr: [11, 12, 13, 14, 15, 16, 17],
  getNum: function () {
    return this.num;
  },
  getSumOfArr: function () {
    return this.numArr.reduce((sum, i) => sum + i, 0);
  },
  productOfArr: function (arr) {
    let temp = arr || this.numArr;
    console.log(arr);
    return temp.reduce((sum, i) => sum * i, 1);
  },
};

let checkNum = function () {
  obj.getNum(); //15                        // binds to object scope
  obj.getNum.call(this); //10               // binds to global scope
  let getNumWithGlobal = obj.getNum; //     // gets function ref
  getNumWithGlobal(); //10                  // runs function in global scope
  console.log(getNumWithGlobal.bind(obj)()); //15    binds the global running function to obj
};

//           call apply
//              call: gets 1st arg is to be bound object,
//                    and subsequent are passed to binding function
//              apply: gets 1st arg is to be bound object,
//                    and second is an array of the arguements to be padded to the binding function

//              the 2nd arguement spreads the array to list of arguments
//              so if sending an array make it an array again to collect the spreaded elements

let checkSumOfArr = function () {
  console.log(obj.getSumOfArr.call(this));
  console.log(obj.getSumOfArr.bind(this)());
  console.log(obj.productOfArr.apply(this, [this.numArr]));
};

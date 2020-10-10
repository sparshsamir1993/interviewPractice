const max = 2 ** 32 - 1;
var reverseInteger = function (x) {
  let less0 = false;
  if (x < 0) {
    x = -1 * x;
    less0 = true;
  }
  let arr = (x + "").split("").reverse().join("");
  arr = +arr;
  if (less0) {
    arr = -1 * arr;
  }
  if (arr > max || arr < max * -1) {
    return 0;
  }
  return arr;
};

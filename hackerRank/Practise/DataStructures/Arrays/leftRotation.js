function rotateLeft(d, arr) {
  // Write your code here
  d = 4;
  arr = [1, 2, 3, 4, 5];
  let newArr = [...arr.slice(d, arr.length), ...arr.slice(0, d)];
  console.log(newArr);
}

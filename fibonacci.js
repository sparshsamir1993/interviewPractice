function fibonacci(place) {
  var zero = 0;
  var first = 1;
  var sum = 0;
  var count = 1;
  // console.log(zero);
  while (count < place) {
    sum = zero + first;
    zero = first;
    first = sum;
    count == place - 1 ? console.log(sum) : "";
    count++;
  }
}

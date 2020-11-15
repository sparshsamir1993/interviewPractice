function myMultiplication(x) {
  let prod = 1;
  for (let i = 0; i < arguments.length; i++) {
    prod *= arguments[i];
  }
  console.log(prod);
}

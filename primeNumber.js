function primeNumber(num) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      console.log(i);
      isPrime = false;
    }
  }

  return isPrime;
}

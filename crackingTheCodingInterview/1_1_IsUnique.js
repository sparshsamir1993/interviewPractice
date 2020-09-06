function isUnique(input) {
  let hash = {};
  for (s in input) {
    if (hash.hasOwnProperty(input[s])) {
      return false;
    }
    hash[input[s]] = true;
  }
  return true;
}

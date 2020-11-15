function sortLexical(s) {
  s =
    "Hello my name is sparsh samir I am looking for a full time opportunity with a great tech company";
  s = s.split(" ");
  let sortedArr = [...s].sort((a, b) => a.localeCompare(b));
  console.log(s, sortedArr);
}

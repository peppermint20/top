console.log("Text");
function add7(x) {
  return x + 7;
}
function multiply(x, y) {
  return x * y;
}
function capitalize(x) {
  return x[0].toUpperCase() + x.slice(1).toLowerCase();
}
function lastLetter(x) {
  return x[x.length - 1];
}

console.log(add7(7));
console.log(multiply(7, 7));
console.log(capitalize("HELLO WORLD"));
console.log(lastLetter("HELLO WORLD"));

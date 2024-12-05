function myFunction(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  return myFunction(Math.min(a, b), Math.abs(a - b));
}

console.log(myFunction(12, 4)); // Output: 4
console.log(myFunction(10, 0)); // Output: 10
console.log(myFunction(0, 15)); // Output: 15
console.log(myFunction(0, 0)); // Output: 0
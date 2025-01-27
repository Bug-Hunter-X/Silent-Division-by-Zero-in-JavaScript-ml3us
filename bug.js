function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; 
  } else {
    return a / b; 
  }
}
console.log(foo(10, 0)); // Throws an error, but not a clear message
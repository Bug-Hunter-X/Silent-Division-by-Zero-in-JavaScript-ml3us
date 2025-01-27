function foo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero!");
  } else if (a === 0 || b === 0) {
    return 0; 
  } else {
    return a / b; 
  }
}
console.log(foo(10, 0)); // Throws a descriptive error
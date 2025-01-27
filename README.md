# Silent Division by Zero in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript: silent failure on division by zero.  While many languages explicitly throw an error upon division by zero, JavaScript's behavior can be unexpected and lead to hard-to-debug issues.

## The Problem

The `bug.js` file contains a function `foo` that attempts to divide two numbers. If either number is zero, it returns 0. Otherwise, it performs the division. However, when the second argument is zero, it results in a `Infinity` value, which is not clearly indicated as an error. 

## The Solution

The `bugSolution.js` file presents a solution that explicitly checks for division by zero and throws an error if encountered. This provides a clearer error message, aiding in debugging and preventing unexpected behavior.

## How to run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a browser's developer console or use Node.js to execute them.
3. Observe the difference in output and error handling.
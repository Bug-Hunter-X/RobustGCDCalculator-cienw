# GCD Function with Incorrect Negative Input Handling

This repository demonstrates a common error in recursive functions: improper handling of negative input values.

The `bug.js` file contains a recursive function designed to calculate the greatest common divisor (GCD) of two numbers.  While it functions correctly for positive inputs, it fails to handle negative numbers appropriately. The `bugSolution.js` file provides a corrected version.

## Bug

The original implementation uses `Math.min` and `Math.abs`, which will work for some cases but will not always produce correct results. The logic fails when comparing negative numbers and the Math.min is not correctly handling this case.

## Solution

The solution involves modifying the function to explicitly handle negative inputs by taking the absolute value of both inputs before performing calculations.

This example highlights the importance of comprehensive input validation and edge-case testing when developing recursive functions.
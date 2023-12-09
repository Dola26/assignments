/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor() {
      this.result = 0;
    }
  
    add(value) {
      this.result += value;
    }
  
    subtract(value) {
      this.result -= value;
    }
  
    multiply(value) {
      this.result *= value;
    }
  
    divide(value) {
      if (value === 0) {
        throw new Error('Division by zero is not allowed.');
      }
      this.result /= value;
    }
  
    clear() {
      this.result = 0;
    }
  
    getResult() {
      return this.result;
    }
  
    calculate(expression) {
      // Remove multiple continuous spaces from the expression
      expression = expression.replace(/\s+/g, '');
  
      // Check for invalid characters
      if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        throw new Error('Invalid characters in the expression.');
      }
  
      // Check for invalid parentheses

      const openParenthesesCount = (expression.match(/\(/g) || []).length;
      const closeParenthesesCount = (expression.match(/\)/g) || []).length;
      if (openParenthesesCount !== closeParenthesesCount) {
        throw new Error('Invalid parentheses in the expression.');
      }
  
      // Evaluate the expression
      try {
        this.result = eval(expression);
  
        if (!isFinite(this.result)) {
          throw new Error('Result is not a finite number.');
        }
      } catch (error) {
        throw new Error('Error evaluating the expression.');
      }
    }
  }
  
  module.exports = Calculator;
  

// Example usage:



   






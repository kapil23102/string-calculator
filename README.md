# String Calculator

A simple String Calculator that performs addition on a string of numbers. The calculator supports multiple delimiters, including commas and new lines, as well as custom delimiters defined by the user.

## Features

- Accepts an empty string and returns `0`.
- Handles single numbers.
- Computes the sum of two or more numbers.
- Supports new line characters as delimiters.
- Allows custom delimiters.
- Throws an error for negative numbers, listing all negative values.

## Installation

1. Clone the repository:
   git clone https://github.com/kapil23102/string-calculator/.git
   cd string-calculator

2. Install the dependencies:
    npm install

## Usage

You can use the add function from the stringCalculator.js file:

const { add } = require('./stringCalculator');

console.log(add('1,2,3')); // Outputs: 6
console.log(add('1\n2,3')); // Outputs: 6
console.log(add('//;\n1;2')); // Outputs: 3

## Testing

To run the tests, use the following command:

npm test

This will run all the test cases defined in stringCalculator.test.js and check for correctness.


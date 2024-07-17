// . Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(num1, num2) {
    return (num1 > num2) ? num1 : num2; // Return the maximum of the two numbers
};

// Example usage:
const max = findMax(10, 20); // Call the function with two numbers
console.log(`The maximum is: ${max}`); // Output: "The maximum is: 20"

// . Task 6: Write a program to calculate the factorial of a number using a do ... while loop.
let number = 5; // You can change this number to calculate the factorial of a different number
let factorial = 1;
let i = 1;

do {
    factorial *= i; // Multiply factorial by i
    i++;            // Increment i
} while (i <= number); // Continue until i is greater than the number

console.log(`The factorial of ${number} is: ${factorial}`);

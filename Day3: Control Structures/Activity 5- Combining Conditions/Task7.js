// . Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log
// the result to the console.

let year = 2024; // You can change this year to test with different values

let isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? "Leap Year" : "Not a Leap Year";

console.log(isLeapYear); // Output: "Leap Year"

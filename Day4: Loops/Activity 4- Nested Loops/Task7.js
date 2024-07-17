// . Task 7: Write a program to print a pattern using nested for loops:
// *
// * *
// * * *
// * * * *
// * * * * *

let rows = 5; // Number of rows for the pattern

for (let i = 1; i <= rows; i++) {
    let pattern = ""; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {
        pattern += "* "; // Add asterisks to the pattern
    }
    console.log(pattern); // Print the pattern for the current row
}



// Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.
let score = 85; // You can change this score to test with different values
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = 'A';
        break;
    case (score >= 80 && score < 90):
        grade = 'B';
        break;
    case (score >= 70 && score < 80):
        grade = 'C';
        break;
    case (score >= 60 && score < 70):
        grade = 'D';
        break;
    case (score >= 0 && score < 60):
        grade = 'F';
        break;
    default:
        grade = 'Invalid score. Please enter a score between 0 and 100.';
}

console.log(grade);

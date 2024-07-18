// . Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function data(name , age = 20) {
    return  `Hello, ${name}! You are ${age} years old.`;
}
const naam = "sachin";
const agee  = 23;
const naam2 = "vipul"

const result1 = data(naam , agee);
console.log(result1);

const result2 = data(naam2 );
console.log(result2);
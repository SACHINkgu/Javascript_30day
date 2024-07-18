// . Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.//
const multiply = (num1 , num2 = 1) => ( num1*num2)

const a  = 2;
const b  = 3;

const ans1 = multiply(a,b);
console.log(ans1);
const ans2 = multiply(a);
console.log(ans2);
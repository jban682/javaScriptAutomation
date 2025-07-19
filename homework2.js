//Homework 2: Numbers, Math, Strings

//Task 1: Convert String to number data and find the result of each operation
//let str1 = Number("5"), str2 = Number("2"); convert the given right away during declaration
let str1 = "5", str2 = "2";

console.log(`The sum of ${str1} and ${str2} is = ${Number(str1) + Number(str2)}`);
console.log(`The product of ${str1} and ${str2} is = ${Number(str1) * Number(str2)}`);
console.log(`The division of ${str1} and ${str2} is = ${Number(str1) / Number(str2)}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${Number(str1) - Number(str2)}`);
console.log(`The remainder of ${str1} and ${str2} is = ${Number(str1) % Number(str2)}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${Math.pow(Number(str1),Number(str2))}\n`);

//Task 2: Convert string to number and find the greatest, smallest, average, and absolute difference value
//Given: let s1 = "200", s2 = "-50";
let s1 = Number("200"), s2 = Number("-50");
let average = (s1 + s2) / 2;

console.log(`The greatest value is = ${Math.max(s1,s2)}`);
console.log(`The smallest value is = ${Math.min(s1,s2)}`);
console.log(`The average is = ${average}`);
console.log(`The absolute difference is = ${Math.abs(s1 - s2)}`);

console.log(`\n`);

//TASK 3: Generate 2 random numbers between 1 and 50. Then find the absolute difference
let random1 = Math.floor(Math.random() * 51);
let random2 = Math.floor(Math.random() * 51);

//console.log(`Test Data: ${random1}, ${random2}`); //to display the generated numbers
console.log(`The absolute difference between numbers is = ${Math.abs(random1 - random2)}`);
console.log(`\n`);
//OR
console.log(`The absolute difference between numbers is = ${Math.abs(Math.floor(Math.random() * 51) - Math.floor(Math.random() * 51))}`);
console.log(`\n`);

//TASK 4: Generate 5 random numbers between 1 and 50. Find the max and min of these number
let ranNum1 = Math.ceil(Math.random() * 50);
let ranNum2 = Math.ceil(Math.random() * 50);
let ranNum3 = Math.ceil(Math.random() * 50);
let ranNum4 = Math.ceil(Math.random() * 50);
let ranNum5 = Math.ceil(Math.random() * 50);

//console.log(`Test Data: ${ranNum1}, ${ranNum2}, ${ranNum3}, ${ranNum4}, ${ranNum5}`); //To display generated numbers
console.log(`The max value = ${Math.max(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5)}`);
console.log(`The min value = ${Math.min(ranNum1, ranNum2, ranNum3, ranNum4, ranNum5)}`);

console.log(`\n`);

//TASK 5: Generates 3 random numbers between 50 and 100 both included.
let randomNum1 = Math.floor(Math.random() * (100 - 49)) + 50;
let randomNum2 = Math.floor(Math.random() * (100 - 49)) + 50;
let randomNum3 = Math.floor(Math.random() * (100 - 49)) + 50;

console.log(`The number 1 = ${randomNum1}`);
console.log(`The number 2 = ${randomNum2}`);
console.log(`The number 3 = ${randomNum3}`);
console.log(`The sum of numbers is =`, randomNum1 + randomNum2 + randomNum3);

console.log(`\n`);

//TASK 6: Generate 3 random numbers between 1 and 100 (both are included) and find if all numbers are more than 25
let randomNumber1 = Math.ceil(Math.random() * 100);
let randomNumber2 = Math.ceil(Math.random() * 100);
let randomNumber3 = Math.ceil(Math.random() * 100);

console.log(`Test Data: ${randomNumber1}, ${randomNumber2}, ${randomNumber3}`); //To display generated numbers

if(randomNumber1 > 25 && randomNumber2 > 25 && randomNumber3 > 25){
    console.log(`true`);
}
    else {
        console.log(`false`);
}
console.log(`\n`); 


//TASK 7: String methods and properties
let name = "David";

console.log(`The length of the name is = ${name.length}`);
console.log(`The first character in the name is = ${name.charAt(0)}`);
console.log(`The last character in the name is = ${name.charAt(4)}`);
console.log(`The first 3 characters in the name are = ${name.slice(0,3)}`);
console.log(`The last 3 characters in the name are = ${name.slice(2,5)}`);
//Task 1: display text in separate console.log
console.log("I start to practice \"JavaScript\" today, and I like it.");
console.log("The secret of getting ahead is getting started.");
console.log("\"Don't limit yourself\"");
console.log("Invest in your dreams. Grind now. Shine later.");
console.log("It's not the load that breaks you down, it's the way you carry it.");
console.log("The hard days are what make you stronger.");
console.log("You can waste your lives drawing lines. Or you can live your life crossing them.");
console.log("\n\n");


//Task 2: Display statement in one console.log
console.log("\t JavaScript is a high-level programming language primarily used to\nbuild web applications. It is not limited to the web; it can also be\nused for the backend developement with technologies like Node.js. \n\n\n\t It is open source and has a huge community support, which means\nthere are plenty of resources and support available for learning. It\nuses a syntax like other proframming languages and easy to learn.")
console.log("\n\n");

//Task 3: write a program that stores information with proper data types and output all variables with separate console.log statement

let myAge = 25, myFavoriteNumber = 49, myHeight = 5.5, myWeight = 50; 
const myFavoriteLetter = "Z";
console.log(myAge);
console.log(myFavoriteNumber);
console.log(myHeight);
console.log(myWeight);
console.log(myFavoriteLetter);
console.log("\n\n");

//Task 4: Create variables. Then, output the sum of the numbers with a proper message as given below.
let num1 = 25, num2 = 35;
let sum = num1 + num2;
//Test Data: 25, 35
console.log("The sum of the numbers =", sum);
console.log("\n");

//Task 5: Create variables. Then, output the PRODUCT of the numbers with proper message.
let n1 = 5, n2 = 7;
let product = n1*n2;
//Test Data: 5,7
console.log("The product of the numbers =", product);
console.log("\n");

//Task 6: Create 2 variables. Then output the sum, product, difference, quotient 
let number1 = 24, number2 = 10;
//test data: 24, 10
let add = number1+number2;
let multiply = number1*number2;
let subtract = number1-number2;
let divide = number1/number2;
let remainder = number1%number2;

console.log("The sum of the numbers is =", add);
console.log("The product of the numbers is =", multiply);
console.log("The subtraction of the numbers is =", subtract);
console.log("The division of the numbers is =", divide);
console.log("The remainder of the numbers is =", remainder);
console.log("\n");


//Task 7: Output the average of the numbers
let i1 = 7, i2 = 11;
let averageOfTwoNumbers = (i1+i2)/2;

console.log('The average of the numbers is:', averageOfTwoNumbers);
console.log("\n");


//Task 8: Output the average of 5 numbers
let a1 = 6, a2 =10, a3 = 12, a4 = 15, a5 = 17;
let sumOfFiveNumbers = (a1+a2+a3+a4+a5);
let averageOfFiveNumbers = sumOfFiveNumbers/5;

console.log("The average of the numbers is:", averageOfFiveNumbers);
console.log("\n");


//Task 9: Output the square of each number
let b1=5, b2=6, b3=10;

console.log("The 5 multiplied with 5 is =",b1*b1);
console.log("The 6 multiplied with 6 is =",b2*b2);
console.log("The 10 multiplied with 10 is =",b3*b3);
console.log("\n");

//Task 10: Output the area and perimter of the square
let side = 7;
let AreaOfSquare = side*side;
let perimeterOfSquare = side*4;

console.log("The perimeter of the square =", perimeterOfSquare);
console.log("The area of the square =", AreaOfSquare);
console.log("\n");


//Task 11: Store information with proper data type and output with ONLY one console.log() statement
const favorite = {
    favBook: 'JS Algorithms and Data Structures',
    favColor: 'Blue',
    favNumber: 7
};

console.log(
    'The favorite book is', favorite.favBook +
    '\nThe favorite color is', favorite.favColor +
    '\nThe favorite number is', favorite.favNumber
);

console.log("\n");


//Task 12: Store information with proper data type and output with ONLY one console.log() statement
const personalDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    emailAddress: "johndoe@gmail.com",
    phoneNumber: "(123) 123 1234",
    address: "123 St Chicago lL 12345"
};

console.log(
    "\tUser who joined this program is", personalDetails.firstName, personalDetails.lastName +
    ". John's age is ", personalDetails.age +
    ". " +
    "\nJohn's email address is", personalDetails.emailAddress +
    ", phone number is\n", personalDetails.phoneNumber +
    ", and address is", personalDetails.address +
    ". "
);
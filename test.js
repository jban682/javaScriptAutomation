//TASK 1: Generate 3 random numbers between 1-100. Print true if average of the number is >= 50 else print false
let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

(function(randomNum1, randomNum2, randomNum3){
    const averageOf3Numbers = (randomNum1 + randomNum2 + randomNum3) /3;
    return averageOf3Numbers;
    console.log(averageOf3Numbers);
})();
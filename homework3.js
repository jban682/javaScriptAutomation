//HOMEWORK 3: JS FUNCTION - IF ELSE STATEMENTS

//TASK 1: Generate 3 random numbers between 1-100. Print true if average of the number is >= 50 else print false
let randomNum1 = Math.ceil(Math.random() * 100);
let randomNum2 = Math.ceil(Math.random() * 100);
let randomNum3 = Math.ceil(Math.random() * 100);

//console.log(randomNum1, randomNum2, randomNum3); //diplay generated random numbers
function randomNumAverageCalculation() {
    //const averageOf3Numbers = (randomNum1 + randomNum2 + randomNum3) / 3;
    return (randomNum1 + randomNum2 + randomNum3) / 3;
}
randomNumAverageCalculation(randomNum1, randomNum2, randomNum3) >= 50 ? console.log(`true`) : console.log(`false`);

console.log(`\n`);

//TASK 2: Generate 3 random numbers between 1-3. Print no match, double match, triple match accordingly
const match1 = Math.ceil(Math.random() * 3);
const match2 = Math.ceil(Math.random() * 3);
const match3 = Math.ceil(Math.random() * 3);

//console.log(match1, match2, match3) //display all generated numbers
if (match1 == match2 && match1 == match3 && match2 == match3) {
    console.log(`TRIPLE MATCH`);
} else if (match1 == match2 || match1 == match3 || match2 == match3) {
    console.log(`DOUBLE MATCH`);
} else {
    console.log(`NO MATCH`);
}

console.log(`\n`);

//TASK 3: write a function which take string word with letter a/A
function hasA(string) {
    return string.toLowerCase().split("").includes("a");
}

console.log(hasA("Tech"));
console.log(hasA("Global"));
console.log(hasA(""));
console.log(hasA("Apple"));

console.log(`\n`);

//TASK 4: Write a function which take string word then returns tripled or doubled depends on string length
function doubleOrTripleWord(string) {
    if (string.length % 2 === 0) {
        return string + string + string;
    } else
        return string + string;
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(""));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord("1"));
console.log(doubleOrTripleWord("22"));

console.log(`\n`);

//TASK 5: Write a function which take string word then the first word
function firstWord(string) {
    const givenTrim = string.trim().split(" ");

    if (string.length === 0) {
        return `""`;
    }

    return givenTrim[0];
}

console.log("Task 5");
console.log(firstWord("Hello World"));
console.log(firstWord("I like Javascript"));
console.log(firstWord("Hello"));
console.log(firstWord(""));
console.log(firstWord(" "));

console.log(`\n`);

//TASK 6: write a function which take string word then the last word
function lastWord(string) {
    const trimTheString = string.trim();

    if (string.length === 0 || trimTheString.length === 0) {
        return `""`;
    }

    const count = trimTheString.split(" ");
    return count[count.length - 1];

}
console.log(lastWord("Hello World"));
console.log(lastWord("I like JavaScript"));
console.log(lastWord("Hello"));
console.log(lastWord(""));
console.log(lastWord("  "));

console.log(`\n`);

//TASK 7: Write a function which take string word then returns the 1st and last words
//let statementWords = "Kukki ando Kurimo";

function firstlastWord(string) {
    const trim = string.trim()

    if (trim.length === 0) {
        return "";
    } else {
        const trimStatement = string.split(" ");
        return trimStatement[0] + trimStatement[trimStatement.length - 1];
    }
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("  "));

console.log(`\n`);


//TASK 8: write a function which take string word then return true is string starts with vowel

function startVowel(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const firstLetter = string.charAt(0).toLowerCase();

    if (string.length === 0) {
        return false;
    } else if (vowels.includes(firstLetter)) {
        return true;
    } else {
        return false;
    }
}

console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("  "));
console.log(startVowel("123"));

console.log(`\n`);

//TASK 9: write a function which take string as an argument then swap the 1st and last 4 letters
function swap4(string) {
    if (string.length < 8) {
        return `""`;
    }

    const first4Letters = string.substring(0, 4);
    const last4Letters = string.substring(string.length - 4);
    const middleLetters = string.substring(4, string.length - 4);
    return last4Letters + middleLetters + first4Letters;
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("  "));
console.log(swap4("Apple"));

console.log(`\n`);

//TASK 10: write a function which take string word as an argument
function swapFirstLastWord(string) {
    const phrase = string.split(" ");
    const firstWord = phrase[0];
    const lastWord = phrase[phrase.length - 1];

    if (phrase.length < 2) {
        return `""`;
    }
    return lastWord + firstWord;
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("foo bar foo bar"));
console.log(firstlastWord(""));
console.log(firstlastWord("Hello"));
console.log(firstlastWord("Hello "));
// Exercise level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
let age = prompt('Enter your age:');
let underAge = 18 - age;

if(age >= 18){
  alert('You are old enough to drive.');
} else {
  alert(`You are left with ${underAge} years to drive.`);
};

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let myAge = 20;
let yourAge = prompt('Enter your age:');

if(myAge > yourAge){
  console.log('You are young');
} else if(myAge < yourAge) {
  console.log('You are old');
} else {
  console.log('We have the same age');
};

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways : using if else or ternary operator.
let a = 4;
let b = 3;

a > b ? 'a is greater than b' : 'a is less than b';

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let numberImput = prompt('Enter a number:');
let verifyNumber = numberImput%2;

verifyNumber === 0 ? 'É numero par' : 'É numero impar';

// Exercise level 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = prompt('Qual a sua nota ?');
if (score >= 80 && score <= 100){
  console.log('Sua nota é A');
} else if(score >= 70 && score <= 89) {
  console.log('Sua nota é B');
} else if(score >= 60 && score <= 69) {
  console.log('Sua nota é C');
} else if(score >= 50 && score <= 59) {
  console.log('Sua nota é D');
} else {
  console.log('Sua nota é F');
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let season = prompt('Enter the current month:');

if ( season === September || season === October || season === November){
  console.log('The season is Autumn');
} else if( season === December || season === January || season === February) {
  console.log('The season is Winter');
} else if( season === March || season === April || season === May) {
  console.log('The season is Spring');
} else {
  console.log('The season is Summer');
};

// 3. Check if a day is weekend day or a working day.

let day = /prompt('What is the day today:')/i;
if (day === Saturday || day === Sunday ){
  console.log(`${day} is a weekend`);
} else {
  console.log(`${day} is a working day`);
}

// Exercise Level 3

// 1. Write a program which tells the number of days in a month.

let month = /prompt('Enter a month')/i;
if (month === january || month === march || month === may || month === july || month === august || month === october || month === december){
  console.log(`${month} has 31 days`);
} else if (month === april || month === june || month === September || month === November) {
  console.log(`${month} has 30 days`);
} else {
  console.log('February has 28 or 29 days');
};
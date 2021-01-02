// 1. Iterate 0 to 10 using for loop

for(i=0; i <= 10; i++){
  console.log(i);
};

// 2. Iterate 10 to 0 using for loop

for(i=10; i >= 0; i--){
  console.log(i);
};

// 3. Iterate 0 to n using for loop

let n = 5;
for(i=0; i < n; i++){
  console.log(i);
};

// 4. Write a loop that makes the following pattern using console.log():

let inc = '';
for(i=1; i < 6; i++){
  inc += "#"
  console.log(inc);
};

// 5. Use loop to multiplicate a number by itself

for(i=1; i <= 10; i++){
  console.log(i * i);
};

// 6.

for(i=1; i <= 10; i++){
  console.log(i, i * i, i*i*i);
};

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

for(i=1; i <= 100; i++){
if(i % 2 == 0)
  console.log(i);
};

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers

for(i=1; i <= 100; i++){
  if(i % 2 !== 0)
    console.log(i);
};

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

for (i = 0; i <= 100; i++) {
  for ( p = 2; p < i; p++) {
      if (i % p === 0 && i > 1) {
          console.log(i);
      };
  };
};

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for(i=0; i <= 100; i++){
  sum+= i;
};
console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let oddsSum = 0;
let evensSum = 0;
for(i=0; i <= 100; i++){
  if(i % 2 ==0){
    evensSum+= i;
  } else {
    oddsSum += i;
  };
};
console.log(`The sum of all odds numbers from 0 to 100 is ${oddsSum}.`)
console.log(`The sum of all evens numbers from 0 to 100 is ${evensSum}.`)

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let oddsSum2 = 0;
let evensSum2 = 0;
let array = [];
for(i=0; i <= 100; i++){
  if(i % 2 ==0){
    evensSum2+= i;
  } else {
    oddsSum2+= i;
  };
};
array.push(oddsSum2);
array.push(evensSum2);
console.log(array);

// 13. Develop a small script which generate array of 5 random numbers
let number1;
let array2 = [];
let min = 0;
let max = 500;
for(i=0; i < 5; i++){
  number1 = Math.floor(Math.random() * (max - min + 1) + min);
  array2.push(number1);
};
console.log(array2)

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomUnique = [];
for(i=0; i < 5; i++){
  number1 = Math.floor(Math.random() * (max - min + 1) + min);
  if (randomUniqueArr.indexOf(number1) === -1) {
    randomUnique.push(number1);
  } else {
    randomUnique.push(number1);
  };
};

// 15. Develop a small script which generate a six characters random id:zzz

let ticket = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomTicket = ""
for (let i = 0; i <= 5; i++) {
    let random = Math.floor(Math.random() * ticket.length);
    randomTicket += ticket[random];
}
console.log(randomTicket);


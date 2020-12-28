// Exercise level 2

//1
console.log("'There is no exercise better for the heart than reaching down and lifting people up.' \n by John Holmes teaches us to help one another.")

//2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`)

//3
let ten = '10';
console.log(typeof '10');
let newTen = +ten;
console.log(newTen);

//4
let floatNine = '9.8';
console.log(parseFloat(floatNine));

let floatTen = Math.round(floatNine);
console.log(floatTen);

//5
let py = 'python';
let jar = 'jargon';
console.log(py.includes('on'), jar.includes('on'));

//6
let frase = 'I hope this course is not full of jargon.'
console.log(frase.includes('jargon'));

//7
let min = 0;
let max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

//8
let min2 = 50;
let max2 = 100;
console.log(Math.floor(Math.random() * (max2 - min2 + 1)) + min2);

//9
let min3 = 0;
let max3 = 255;
console.log(Math.floor(Math.random() * (max3 - min3 + 1)) + min3);

//10
let js = 'JavaScript';
let js10 = Math.floor(Math.random() * js.length + 1);
console.log(js[js10]);

//11
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 2 7 \n4 1 4 16 6 4 \n5 1 5 25 125');

//12
let slice1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(slice1.substr(0, 30) ,slice1.substr(55, 56));
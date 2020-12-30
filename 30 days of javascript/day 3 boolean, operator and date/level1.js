//Exercise level 1

//1
let firstName = 'Daniel';
let lastName = 'Passos';
let country = 'Brazil';
let city = 'Aracaju';
let age = 20;
let isMarried = false;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);

//2
console.log(typeof '10' == 10);

//3
console.log(parseInt('9.8') == 10);

//4
let false1 = false;
let false2 = false;
let false3 = false;

let true1 = true;
let true2 = true;
let true3 = true;

//5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');

let py = 'python';
let jar= 'jargon';
let length1 = py.length;
let length2 = jar.length;

console.log(length1 !== length2);

//6
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let drag = 'dragon';
let pyth = 'python';
console.log(!(drag.includes('on')) && !(pyth.includes('on')))

//7
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();

const totalYear = year - 1970;
const totalMonth = month - 1;
const totalDays = date - 1;

console.log(`${totalDays}/${totalMonth}/${totalYear}`);
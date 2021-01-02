// Exercise Level 1

// 1. Declare an empty array;

const empty = Array();

// 2. Declare an array with more than 5 number of elements

const sixNum = [1,2,3,4,5,6,7];

// 3. Find the length of your array

console.log(sixNum.length);

// 4. Get the first item, the middle item and the last item of the array

console.log(sixNum[0]);
console.log(sixNum[3]);
console.log(sixNum[6]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, 'Pão', 3, true, null];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()

console.log(itCompanies);

// 8. Print the number of companies in the array

console.log(itCompanies.length);

// 9. Print the first company, middle and last company

console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

// 10. Print out each company

console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4],itCompanies[5],itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
const newItCompanies = itCompanies.map(p => p.toUpperCase());

console.log(newItCompanies);

// 12. Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const index = 'Amazon';
if(itCompanies.includes(index)){
  console.log(index)
} else {
  console.log("Company is not found")
}

// 14. Filter out companies which have more than one 'o' without the filter method

let filtro = [];
if(itCompanies.map(p => p.includes('oo'))){
  filtro.push(itCompanies.map(p => p.includes('oo')));
  console.log(filtro);
} else {
  console.log("Doesn't has companies");
}

// 15. Sort the array using sort() method

itCompanies.sort();

// 16. Reverse the array using reverse() method

itCompanies.reverse();

// 17. Slice out the first 3 companies from the array

let first3 = itCompanies.slice(3);
console.log(itCompanies);
console.log(first3);

// 18. Slice out the last 3 companies from the array

let last3 = itCompanies.slice(0,4);
console.log(last3);

// 19. Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(3,4));

// 20. Remove the first IT company from the array

console.log(itCompanies.slice(1));

// 21. Remove the middle IT company or companies from the array

console.log(itCompanies.splice(3,1));

// 22. Remove the last IT company from the array
console.log(itCompanies.unshift(6));

// 23. Remove all IT companies

console.log(itCompanies.slice(7));

// Exercise level 2

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/,/g,'');
let arraywords = words.split(' ');
console.log(arraywords)
console.log(arraywords.length)

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const alergic = true;
if(!shoppingCart.includes('Meat')){
  shoppingCart.unshift('Meat');
}
if(!shoppingCart.includes('Sugar')){
  shoppingCart.push('Sugar');
}
if(alergic == true){
  const honey = 'Honey';
  shoppingCart.splice(shoppingCart.indexOf(honey), 1);
}
console.log(shoppingCart);


// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

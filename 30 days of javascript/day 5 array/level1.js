// Exercise Level 1

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

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

// 14.
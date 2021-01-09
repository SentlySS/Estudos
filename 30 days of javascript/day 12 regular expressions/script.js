// Exercise

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

let str = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let pattern = /\d{1,5}/g;
let matches = str.match(pattern);
let [salary,annual,courses] = matches;
function calculateTotal(){
  let salaryTotal = parseInt(salary) * 12;
  let courseTotal = parseInt(courses) * 12;
  let bonnus = parseInt(annual);
  return eval(salaryTotal + courseTotal + bonnus);
}
console.log(calculateTotal())

// 2. Write a pattern which identify if a string is a valid JavaScript variable
let pattern2 = /[a-z]/gi;
function isValid(name){
  let valid = pattern2.test(name);
  return valid;
};

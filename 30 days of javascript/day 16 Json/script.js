// Exercise

// 1. Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
const newSkill = JSON.stringify(skills);

// 2. Stringify the age variable
let age = 250;
const newAge = JSON.stringify(age);

// 3. Stringify the isMarried variable
let isMarried = true;
let married = JSON.stringify(isMarried);

// 4. Stringify the student object
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
};
let newStudent = JSON.stringify(student, ['firstName', 'lastName', 'age', 'isMarried', 'skills'], 5);
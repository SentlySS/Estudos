// Exercise

// 1. Store you first name, last name, age, country, city in your browser localStorage.
const myData = {
  firstName: 'Daniel',
  lastName: 'Passos',
  age: 20,
  country: 'Brazil',
  city: 'Aracaju'
}

const data = JSON.stringify(myData);
localStorage.setItem('myData', data);

// 2. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
  firstName: 'Daniel',
  lastName: 'Passos',
  age: 20,
  country: 'Brazil',
  skill: ['Html', 'css', 'Js'],
  city: 'Aracaju'
}

const newstudent = JSON.stringify(student, undefined, 3)
localStorage.setItem('student', newstudent);
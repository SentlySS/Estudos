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

const newData = localStorage.setItem('myData', data);
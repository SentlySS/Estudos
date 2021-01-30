// Exercise level 2
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1. Find the person who has many skills in the users object.
let vencedor = '';
let maior = 0;

for(user in users){
  if(users[user].skills.length > maior){
   maior = users[user].skills.length;
   vencedor = user;
  }
}
console.log(vencedor);

// 2. Count logged in users,count users having greater than equal to 50 points
let count = 0;
for(user in users){
  if(users[user].points >= 50){
   count++;
  }
}
console.log(count);

// 3. Find people who are MERN stack developer from the users object
let mern = '';
for(user in users){
  if(users[user].skills.includes('Express')){
   mern = mern + ' ' + user;
  }
}
console.log(mern);

// 4. Set your name in the users object without modifying the original users object
users.Daniel = {
  email: 'daniel@daniel.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 20,
  isLoggedIn: false,
  points: 40
};

// 5. Get all keys or properties of users object
console.log(Object.keys(users.Daniel));

// 6. Get all the values of users object
console.log(Object.values(users.Daniel));

// 7. Use the countries object to print a country name, capital, populations and languages.
const countries = {
  Brasil:{
    name: "Brasil",
    capital: "Brasilia",
    populations: 200000000,
    languages: "PT-BR"
  }
}

for(pais in countries){
  console.log(`O nome do país é ${this.name}, capital:${this.capital}, com uma população de ${this.populations} e os habitantes falam ${this.languages}`);
}
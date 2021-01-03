// Exercises: Level 2

// 1. Develop a small script which generate any number of characters random id

let ticketID = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomTicketNumber = ""
let randomLoop = Math.floor(Math.random() * (10 - 4 + 1) + 4);
for (i = 0; i <= randomLoop; i++) {
    let random = Math.floor(Math.random() * ticketID.length);
    randomTicketNumber += ticketID[random];
}
console.log(randomTicket);

// 2. Write a script which generates a random hexadecimal number.

let hexa = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
let randomHexa = "#"
for(i = 1; i <= 6; i++){
  let random = Math.floor(Math.random() * hexa.length);
  randomHexa += ticketID[random];
};

console.log(randomHexa);

// 3. Write a script which generates a random rgb color number.

let random1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let random2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let random3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
console.log(`rgb(${random1},${random2},${random3})`);

// 4. Using the above countries array, create the following new array.

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
];

const newCountries = countries.map(p => p.toUpperCase());
console.log(newCountries);

// 5. Using the above countries array, create an array for countries length'.

const countriesLength = countries.map(p => p.length);
console.log(countriesLength);

// 6. Use the countries array to create the following array of arrays:

let newCountriesLength = [];
for (let i = 0; i < newCountries.length; i++) {
    newCountriesLength.push([newCountries[i], newCountries[i].slice(0, 3), newCountries[i].length])
}
console.log(newCountriesLength);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let countWithoutLand = [];
let countWithLand = [];
for (i = 0; i < countries.length; i++) {
    if (countries[i].includes("land")) {
        countWithLand.push(countries[i]);
    } else {
        countWithoutLand.push(countries[i]);
    };
};


// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let countWithoutIa = [];
let countWithIa = [];
for (i = 0; i < countries.length; i++) {
    if (countries[i].includes("ia")) {
        countWithIa.push(countries[i]);
    } else {
        countWithoutIa.push(countries[i]);
    };
};

// 8. Using the above countries array, find the country containing the biggest number of characters.

let biggest = "";
for (i = 0; i < countries.length; i++) {
  if (biggest.length < countries[i].length) {
      biggest = countries[i];
  } else {
      biggest = biggest;
  };
};

console.log(biggest);

// 9. Using the above countries array, find the country containing only 5 characters.

let arrayFive = [];
for (i = 0; i < countries.length; i++) {
  if (5 >= countries[i].length) arrayFive.push(countries[i]);
};

console.log(arrayFive)

// 10. Find the longest word in the webTechs array
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

let biggestWord = "";
for (i = 0; i < webTechs.length; i++) {
  if (biggestWord.length < webTechs[i].length) {
      biggestWord = webTechs[i];
  } else {
      biggestWord = biggestWord;
  };
};
console.log(biggestWord)
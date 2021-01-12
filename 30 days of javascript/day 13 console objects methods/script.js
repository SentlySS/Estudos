// Exercises

// 1. Display the countries array as a table
const countries = ['Finland', 'Sweden', 'Norway'];
console.table(countries);

// 2. Display the countries object as a table
const countries2 = [
  {
    country: 'Finland',
    city: 'Helsinki'
  },
  {
    country: 'Sweden',
    city: 'Stockholm'
  },
  {
    country: 'Norway',
    city: 'Oslo'
  }
]
console.table(countries2);

// 3. Use console.group() to group logs
console.group('countries');
console.log(countries);
console.groupEnd();
console.group('countries2');
console.log(countries2);
console.groupEnd();

// 4. 10 > 2 * 10 use console.assert()
console.assert( 10 > 2 * 10, '10 is not greater than 2 * 10');

// 5. Write a warning message using console.warn()
console.warn('Aviso, você foi avisado');

// 6. Write an error message using console.error()
console.error('Erro, isso é um erro');

// 7.Check the speed difference among the following loops: for, for of, forEach
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
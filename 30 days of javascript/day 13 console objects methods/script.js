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

// 4. 
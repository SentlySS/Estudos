// Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 1. Explain the difference between forEach, map, filter, and reduce.

// Map cria um novo array com a função callback passada para cada elemento
// ForEach executa uma função em cada elemento do array
// Filter cria um novo array de acordo com os elementos que satisfazem a condição passada
// Reduce é para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra.

// 2. Use forEach to console.log each country in the countries array.
countries.forEach((pais) => console.log(pais));

// 3. Use forEach to console.log each name in the names array.
names.forEach((name) => console.log(name));

// 4. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesUP = countries.map(pais => pais.toUpperCase());

// 5. Use map to create an array of countries length from countries array.
const countriesLength = countries.map(pais => pais.length);

// 6. Use filter to filter out countries containing land.
const countriesLand = countries.filter( pais => pais.includes('land'));

// 7. Use filter to filter out countries having six character.
const countriesLSix = countries.filter(pais => pais.length == 6);

// 8. Use filter to filter out only prices with values.
const priceWithValue = products.filter(prices => prices.price.valueOf(Number));
console.log(priceWithValue);
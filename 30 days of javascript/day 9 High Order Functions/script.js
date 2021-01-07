// Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
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
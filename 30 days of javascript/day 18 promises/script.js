// Exercise

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
const url = 'https://restcountries.eu/rest/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.log(error))
  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries.country)
      console.log(countries.capital)
      console.log(countries.languages)
      console.log(countries.population)
      console.log(countries.area)
    } catch (err) {
      console.log(err)
    }
  }
  fetchData()
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook">Notebook</Link> {' '}
      <Link to="produto/smartphone">Smartphone</Link>
    </div>
  )
}

export default Home;
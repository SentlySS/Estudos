import React from 'react';
import Header from './Header'
import Home from './Home'
import Produto from './produtoproduto'

const App = () => {
  let Pagina;
  const {pathname} = window.location;
  if(pathname === '/produtos'){
    Pagina = Produto
  } else {
    Pagina = Home
  }

  return (
    <section>
      <Header />
      <Pagina />
    </section>
  );
};

export default App;

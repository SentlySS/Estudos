import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './Home';
import Sobre from  './Sobre';
import Header from  './Header';
import Login from  './Login';
import NaoEncontrada from  './NaoEncontrada';
import Produto from "./Produto";
import ProdutoAvaliacao from '../19 Nested Routes/ProdutoAvaliacao';
import ProdutoCustomizado from '../19 Nested Routes/ProdutoCustomizado';
import ProdutoDescricao from '../19 Nested Routes/ProdutoDescricao';

const App = () => {
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<Sobre />}/>
        <Route path="login" element={<Login />}/>
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />}/>
          <Route path="avaliacao" element={<ProdutoAvaliacao />}/>
          <Route path="customizado" element={<ProdutoCustomizado />}/>
        </Route>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;

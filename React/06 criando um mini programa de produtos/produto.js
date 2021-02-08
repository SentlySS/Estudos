import React from 'react';
import Titulo from './Titulo'
import Layoult from './Layoult'

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produto = () => {
  return (
    <section>
    <Titulo text="Produtos" />
    {produtos.map((produto) => (
        <Layoult key={produto.nome} {...produto} />
    ))}
    </section>
  )
}

export default Produto;
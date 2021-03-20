import React from 'react'

class Produtos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('Quando ele monta, utilizado para o Fetch');
  }

  componentDidUpdate() {
    console.log('Sempre que atualiza');
  }

  componentWillUnmount() {
    console.log('Sempre que é desmontado');
  }

  handleClick() {
    this.setState((state) => ({
      contar: state.contar + 1,
    }));
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.state.contar}</p>
        <button onClick={this.handleClick}>Adicionar</button>
      </div>
    );
  }
}

export default Produtos;
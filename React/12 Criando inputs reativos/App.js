import React from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Select from "./Form/Select";

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);

  return(
    <form>
      <h2>Checkbox</h2>
      <Checkbox options={['JavaScript', 'PHP', 'Ruby']} value={linguagens} setValue={setLinguagens}/>
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input
        id="nome"
        label="Nome"
        value={nome}
        setValue={setNome}
        required
      />

      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  )
};

export default App;

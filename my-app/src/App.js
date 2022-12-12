import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulário';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado= (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }
  
  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  );
}
export default App;

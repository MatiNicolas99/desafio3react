import { useState } from "react";
import { BaseColaboradores } from "./helpers/baseColaboradores";
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import Forms from "./components/Forms";
import "./components/forms.css"

const App = () => {
  const [inputNombre, setInputNombre] = useState('');
  const [inputCorreo, setInputCorreo] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const addColaborador = (nombre, correo) => {
    setColaboradores([...colaboradores, { nombre: nombre, correo:
        correo, id: colaboradores.length+1 }]);
};
  const onNameChange = (e) => {
      setInputNombre(e.target.value);
};
  const onCorreoChange = (e) => {
    setInputCorreo(e.target.value);
};
  const onSubmit = (e) => {
    if (inputNombre === "" || inputCorreo === ""){
      alert("Faltan datos por ingresar");
    }else {
      e.preventDefault();
      addColaborador(inputNombre, inputCorreo);
      setInputNombre("");
      setInputCorreo("");
    };
  };
  const filtroColaboradores = colaboradores.filter(colaborador => colaborador.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase()));

  return (
    <div>
      <Forms 
      onSubmit={onSubmit} 
      valueName={inputNombre} 
      valueEmail={inputCorreo} 
      filtroColaboradores={filtroColaboradores}
      onNameChange={onNameChange}
      onCorreoChange={onCorreoChange}
      busqueda={busqueda} setBusqueda={setBusqueda}
      />
    </div>
    
  )
};

export default App
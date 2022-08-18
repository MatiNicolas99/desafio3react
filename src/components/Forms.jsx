import Search from "./Search";

const Forms = ({onSubmit, valueName, valueEmail, filtroColaboradores, onNameChange, onCorreoChange, busqueda, setBusqueda}) => {
  return (
      <div className='formulario'>
      <div className="wrapper">
              <div className="inner">
                  <form className="form" onSubmit={onSubmit}>
                      <h3>Ingresa un colaborador</h3>
                      <p>Favor ingresa el nombre y correo del colaborador, no olvides completar ambos recuadros</p>
                      <label className="form-group">
                          <input type="text" className="form-control" value={valueName} onChange={onNameChange}/>
                          <span>Nombre</span>
                          <span className="border"></span>
                      </label>
                      <label className="form-group">
                          <input type="text" className="form-control" value={valueEmail} onChange={onCorreoChange}/>
                          <span for="">Email</span>
                          <span className="border"></span>
                      </label>
                      <div className="buttons">
                      <button className='button'>Enviar</button>
                      </div>
                  </form>
                  <Search busqueda={busqueda} setBusqueda={setBusqueda}/>
                  <div className="list">
                  <h1 className="list___title">Lista de Colaboradores</h1>
                  {filtroColaboradores.map((item) => {
                    return(
                    <div className="list__item" key={item.id}>
                        <div>
                        <p className="list__p">{item.nombre}</p>
                        </div>
                        <div >
                        <p className="list__p">{item.correo}</p>
                        </div>
                    </div>)
                    }
                 )}
                 </div>
              </div>
          </div>
          </div>
  );

};

export default Forms
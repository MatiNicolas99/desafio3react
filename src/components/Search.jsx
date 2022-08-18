
function Search({busqueda, setBusqueda}) {

  const onSearchChange = ({target}) => {
    setBusqueda(target.value);
  };

  return (
    <label className="form-group">
    <input className="form-control"
      type="search"
      aria-label="Search"
      value={busqueda}
      onChange={onSearchChange}/>
    <span for="">Busqueda</span>
    <span className="border"></span>
    </label>
    // </>
  );
}
export default Search;
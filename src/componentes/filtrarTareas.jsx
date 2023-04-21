export const FiltrarTareas = ({setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
    <div className='campo'>
                    <label>Filtrar Tareas</label>
                    <select onChange={(e)=>{setFiltro(e.target.value)}} id="categoria">
                        <option value="">-- Todos --</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="hogar">Hogar</option>
                        <option value="estudios">Estudios</option>
                        <option value="ocio">Ocio</option>
                    </select>
                </div>
                </div>
  )
}

export default FiltrarTareas

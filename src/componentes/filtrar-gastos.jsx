const FiltrarGastos = ({setFiltro}) => {
    return (
        <div>
            <div className="filtros sombra contenedor">
                <label>Filtrar Gastos</label>
                <select onChange={(e)=>setFiltro(e.target.value)} id="categoria">
                    <option value="">-- Todos --</option>
                    <option value="ahorros">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos varios</option>
                    <option value="ocio">Ocio</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </div>
    )
}


export default FiltrarGastos
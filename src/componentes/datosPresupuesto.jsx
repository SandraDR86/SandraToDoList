

const DatosPresupuesto = ({ presupuesto, setPresupuesto, disponible, totalGastos, setGastos}) => {
    const handleReset = () => {
        setPresupuesto(0)
        setGastos([])
    }
    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div className="contenido-presupuesto">
                <p>
                    <span> Presupuesto: </span>
                    £{presupuesto}
                </p>
                <p>
                    <span> Gastos: </span>
                    £{totalGastos}

                </p>
                <p>
                    <span> Disponible: </span>
                    £{disponible}
                </p>
                <button onClick={handleReset} className="reset-app">Resetear presupuesto</button>
            </div>
        </div>
    )

}

export default DatosPresupuesto
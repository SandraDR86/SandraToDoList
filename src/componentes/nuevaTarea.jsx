import iconoNuevoGasto from "../img/nuevo-gasto.svg"


const NuevaTarea = ({ handleAddTarea }) => {
    return (
        <div className="nuevo-gasto">
            <img onClick={handleAddTarea} src={iconoNuevoGasto} alt="icono-nuevoGasto" />
        </div>
    )
}


export default NuevaTarea
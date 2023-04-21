import iconoNuevoGasto from "../img/nuevo-gasto.svg"
//esto es el icono del +

const NuevoGasto = ({ handleAdd }) => { //hay que pasarle por props el setModal xq sale que no esta definido y va entre llaves
    return (
        <div className="nuevo-gasto">
            <img onClick={handleAdd} src={iconoNuevoGasto} alt="icono-nuevoGasto" />
        </div>
    )
}


export default NuevoGasto
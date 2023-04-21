import iconoNuevaTarea from "../img/nuevo-gasto.svg"

//este componente es para el icono del +
const NewTask = ({setModalTarea}) => {
    return (
        <div className="nuevo-gasto"> <img onClick={()=> setModalTarea(true)} src={iconoNuevaTarea} alt="iconoNuevaTarea" /></div>
    )
}

export default NewTask
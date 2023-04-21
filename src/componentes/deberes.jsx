import IconoTrabajo from "../img/icono_ahorro.svg"
import IconoHogar from "../img/icono_casa.svg"
import IconoOcio from "../img/icono_ocio.svg"
import IconoEstudios from "../img/icono_suscripciones.svg"

const ListaIconos = {
    trabajo: IconoTrabajo,
    hogar: IconoHogar,
    estudios: IconoEstudios,
    ocio: IconoOcio
}

//esto equivale a Gasto en presupuesto
const Deberes = ({ deberes, eliminarTarea, editarTarea }) => {

    const handleDelete = () => {
        eliminarTarea(deberes.id)
    }


    const handleEditar = () => { //para editar, editarGasto necesita el gasto completo, no solo el id como en eliminar
        editarTarea(deberes)

    }


    return (
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img src={ListaIconos[deberes.categoria]} alt="" />
                <div className="descripcion-gasto">
                    <p className="categoria">{deberes.categoria}
                    <p className="nombre-gasto">{deberes.nombre}</p>
                    </p>
                </div>

            </div>
            <div className="descripcion-gasto">
                <p>
                    <button onClick={(handleDelete)} className="delete-edit-button">Eliminar</button>
                </p>
                <p>
                    <button onClick={(handleEditar)} className="delete-edit-button">Editar</button>
                </p>
            </div>
        </div >
    )
}

export default Deberes
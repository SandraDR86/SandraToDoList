import { useForm } from "react-hook-form";
import cerrarModalTarea from "../img/cerrar.svg"
import { useEffect } from "react";

const ModalTarea = ({ setModalTarea, addDeberes, tareaEditable, editTarea }) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    //declaramos funcion para handleTarea, que cuando añada una tarea se añada a la pagina, esto es si la tarea editable existe, pues edito, si no, pues anado
    const handleTarea = (data) => {
        if (tareaEditable) {
            data.id = tareaEditable.id
            editTarea(data)
        } else { //else es la accion de añadir la tarea
            data.fecha = Date.now()
            data.id = `${data.fecha}${data.nombre}`
            // console.log(data);
            addDeberes(data)

        }
        setModalTarea(false)
    }

    useEffect(() => {
        if (tareaEditable) {

            setValue("nombre", tareaEditable.nombre)
            setValue("categoria", tareaEditable.categoria)
        }

    }, []) //cuando se realiza una sola vez, dejamos el corchete vacio



    return (
        <div className="modal">
            <div className="cerrar-modal"> <img onClick={() => setModalTarea(false)} src={cerrarModalTarea} alt="iconoCerrarModalTarea" /></div>
            <form className="formulario" onSubmit={handleSubmit(handleTarea)}>
                <legend>Nueva Tarea</legend>
                <div className='campo'>
                    <label>Nombre tarea</label>
                    <input className='nuevo-presupuesto' placeholder='insertar tarea' type="text" {...register('nombre', { required: true })} />
                    {errors.nombre && <p className='alerta error'>Tarea requerida</p>}
                </div>

                <div className='campo'>
                    <label>Categoria</label>
                    <select id="categoria" {...register('categoria', { required: true })}>
                        
                        <option value="">-- Seleccionar --</option>
                        <option value="trabajo">Trabajo</option>
                        <option value="hogar">Hogar</option>
                        <option value="estudios">Estudios</option>
                        <option value="ocio">Ocio</option>
                    </select>
                    {errors.categoria && <p className='alerta error'>Categoria requerida</p>} 
                </div>
               
               {tareaEditable ?
                    <button type="submit">Editar Tarea</button>
                    :
                    <button type="submit">Añadir Tarea</button>
                } 

            </form>
        </div>
    )
}

export default ModalTarea

//<button type="submit">{tareaEditable ? "Editar" : "Añadir"}</button>
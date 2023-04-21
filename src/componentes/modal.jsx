import { useEffect } from "react";
import { useForm } from "react-hook-form";
import iconoCerrar from "../img/cerrar.svg"

const Modal = ({ setModal, addGasto, gastoEditable, editGasto }) => {
    //console.log(gastoEditable);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();

    //creamos la funcion k llamamos dentro del handlesubmit en el formulario, es una funcion que se va a añadir cuando le demos a añadir gasto, lo que nos llega es data asi que se lo añadimos por parametro a la funcion

    const handleGasto = (data) => { //en data tengo yo mi objeto de gasto, los gastos que vamos creando
        if (gastoEditable) {
            //editar
            data.id = gastoEditable.id            
            data.fecha = gastoEditable.fecha //
            editGasto(data)
        } else {
            //añadir
            data.fecha = Date.now() //ES PARA PONER LA FECHA EN JS
            data.id = `${data.fecha}${data.GastoName}`
            addGasto(data)
            
        }
        setModal(false) //el gasto se add cuando se cierra el formulario
    }




    useEffect(() => {
        if (gastoEditable) {

            setValue("GastoName", gastoEditable.GastoName)
            setValue("GastoCantidad", gastoEditable.GastoCantidad)
            setValue("categoria", gastoEditable.categoria)
        }

    }, []) //cuando se realiza una sola vez, dejamos el corchete vacio

    return (
        <div className="modal">
            <div className="cerrar-modal" >
                <img onClick={() => setModal(false)} src={iconoCerrar} alt="icono-cerrar" />
            </div>

            <form className="formulario" onSubmit={handleSubmit(handleGasto)}>
                <legend>nuevo gasto</legend>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input type="text" placeholder="añadir nombre del gasto" {...register('GastoName', { required: true })} />
                    {errors.GastoName && <p className="alerta error">Gasto requerido</p>}
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input type="number" placeholder="añadir cantidad" {...register('GastoCantidad', { required: true })} />
                    {errors.GastoCantidad && <p className="alerta error">cantidad requerido</p>}
                </div>


                <div className="campo">
                    <label>Categoria</label>
                    <select id="categoria" {...register('categoria', { required: true })}>
                        <option value="">-- Seleccionar --</option>
                        <option value="ahorros">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                {gastoEditable ?
                    (<button type="submit">editar gasto</button>)
                    :
                    (<button type="submit">añadir gasto</button>)
                }

            </form>

        </div>

    )
}

export default Modal
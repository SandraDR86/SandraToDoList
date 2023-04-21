import { useForm } from 'react-hook-form';

//creamos un nuevo componente con un formulario, con react hook form npm desde la web y copiamos todo el return y la constante hasta useForm e instalamos el react hook form
const NuevoPresupuesto = ({setPresupuesto}) => {
    //creamos funcion que cambie el nuevo presupuesto para add it to the handlesubmit 

    const handlerPresupuesto = (data) => {
        //console.log(data.nuevoPresupuesto);
        setPresupuesto(data.nuevoPresupuesto)
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form className="formulario" onSubmit={handleSubmit(handlerPresupuesto)}>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input className='nuevo-presupuesto' placeholder='add budget' type="number" {...register('nuevoPresupuesto', { required: true })} />
                    {errors.nuevoPresupuesto && <p className='alerta error'>Presupuesto Requerido</p>}
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default NuevoPresupuesto
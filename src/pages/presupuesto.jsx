import { useEffect, useState } from "react"
import DatosPresupuesto from "../componentes/datosPresupuesto"
import NuevoGasto from "../componentes/nuevoGasto"
import NuevoPresupuesto from "../componentes/nuevo-presupuesto"
import Modal from "../componentes/modal"
import Gasto from "../componentes/gasto"
import FiltrarGastos from "../componentes/filtrar-gastos"



//creamos un componente
const Presupuesto = () => {//creamos variable de estado que nos permite cambiar cosas dentro de nuestro componente, en este caso decirle k se muestre un valor si es verdadero o que se oculte si es falso
    const [modal, setModal] = useState(false)
    //creamos variable de estado tienen k ir dentro de corchete y tienen dos valores, el nombre de la variable y la funcion para cambiarla,tiene k ir en minuscula xq es una variable, tienen que ir dentro del componente
    const [presupuesto, setPresupuesto] = useState(0)
    const [totalGastos, setTotalGastos] = useState(0)
    const [disponible, setDisponible] = useState(0)

    //creamos una constante de estado para add los gastos que vamos insertando que se iran guardando en un array vacio
    const [gastos, setGastos] = useState([])
    const [gastosFiltrados, setGastosFiltrados] = useState([])
    const [filtro, setFiltro] = useState(null)
    const [gastoEditable, setGastoEditable] = useState(null)

    useEffect(() => {
        if (filtro) {
            const temporalGastos = gastos.filter((gasto) => {
                return (
                    filtro === gasto.categoria
                )
            })
            setGastosFiltrados(temporalGastos)
        } else {
            setGastosFiltrados(gastos)
        }
    }, [filtro, gastos])

    useEffect(() => {
        let temporalGastos = 0
        gastos.forEach(element => {
            //   console.log(element)
            temporalGastos += Number(element.GastoCantidad)
        })
        setTotalGastos(temporalGastos)
        setDisponible(presupuesto - temporalGastos)

    }, [gastos])

    //cuando entro el presupuesto x primera vez, el disponible sera igual k lo que tengo de presupuesto
    useEffect(() => {
        setDisponible(presupuesto)
    }, [presupuesto])


    //vamos a crear una funcion para ir añadiendo todos los gastos y asi luego llamar simplemente a la funcion en modal, por parametro le pasamos newGasto y luego llamamos a la funcion add gasto abajo, en el componente modal

    const addGasto = (newGasto) => {
        setGastos([...gastos, newGasto]) //la funcion set siempre lleva parentesis, y para añadir lo que tenia antes, es ...gastos y luego el nuevo parametro k cree
    }

    const editGasto = (editableGasto) => {
        //console.log(editableGasto);

        //map de gastos y sustituir el mismo id
        const temporalGastos = gastos.map((gasto) => {
            if (gasto.id === editableGasto.id) {
                return editableGasto
            } else {
                return gasto
            }
        })
        //cambiamos el array de gastos completo x el nuevo ya editado
        setGastos(temporalGastos)
        //setModal(false) // esto es que al dar editar, se cierra el modal cuando editamos un gasto, lo he quitado de aqui porque en el modal lo que quitado del else, entonces pasa siempre
    }


    const eliminarGasto = (idGasto) => {
        const temporalGastos = gastos.filter((gasto) => {
            return (gasto.id !== idGasto)
        })
        setGastos(temporalGastos)
    }
    //funcion para editar el gasto, cuando damos click en el boton editar se nos muestra el modal 
    const viewModalEditarGasto = (gasto) => {
        //  console.log(gasto);
        setModal(true)
        setGastoEditable(gasto)
    }
    //funcion para editar el modal 
    const handleAdd = () => {
        setModal(true)
        setGastoEditable(null)
    }
    //aqui hacemos la condicional ternaria, si presupuesto existe con interrogante ?

    return (
        <>
            <div className="header">
                <h1>planificador de gastos</h1>
                <>
                    {presupuesto ? (
                        //ponemos fragment cuando llamamos a varios componentes en la condicional, el componente nuevo gasto es el k se add con el +
                        <>
                            <DatosPresupuesto
                                presupuesto={presupuesto}
                                setPresupuesto={setPresupuesto}
                                disponible={disponible}
                                setDisponible={setDisponible}
                                totalGastos={totalGastos}
                                setGastos={setGastos}
                            />
                            <NuevoGasto handleAdd={handleAdd} />
                        </>

                    ) : (
                        <NuevoPresupuesto setPresupuesto={setPresupuesto} />
                    )}
                </>
            </div>
            {/* TODO ESTE BLOQUE DE CODIGO SE VA A MOSTRAR SIEMPRE Y CUANDO HAYA GASTOS, ANTES DEL DIV PONEMOS UNA CONDICIONAL, SI HAY GASTOS, FILTRAMOS, y le estoy diciendo k si hay gastos.length mayor a 0, k se muestre todo el div, y cerramos la llave justo despues del ultimo div */}
            {gastos.length > 0 &&
                <div className="gastosMain">

                    <FiltrarGastos setFiltro={setFiltro} />

                    <div className="listado-gastos-contenedor">

                        {gastosFiltrados.map((gasto) => {
                            return (
                                <Gasto key={gasto.id} gasto={gasto} eliminarGasto={eliminarGasto} viewModalEditarGasto={viewModalEditarGasto} />
                            )
                        })}

                    </div>
                </div>
            }
            {/* //con la variable modal lo mostramos y con el && es hacer un if sin un else, a la izq ponemos la condicion k es mostrar el modal y a la derecha mostramosla accion k vamos a hacer */}
            {modal && <Modal setModal={setModal} addGasto={addGasto} gastoEditable={gastoEditable} editGasto={editGasto} />}



        </>
    )
}

export default Presupuesto
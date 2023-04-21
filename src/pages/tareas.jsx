import { useEffect, useState } from "react"
import Deberes from "../componentes/deberes"
import ModalTarea from "../componentes/modalTarea"
import NewTask from "../componentes/newTask"
import FiltrarTareas from "../componentes/filtrarTareas"
import NuevaTarea from "../componentes/nuevaTarea"


const Tareas = () => {
  //creamos variable de estado para mostrar las tareas y si no hay que se muestre un sms de que no hay tareas pendientes
  //const [tareas, setTareas] = useState(null) //esto equivale a presupuesto
  //creamos el modal para adicionar tareas
  const [modalTarea, setModalTarea] = useState(false)
  const [deberes, setDeberes] = useState([]) //aqui guardare las tareas que vaya añadiendo esto equivale al de gastos
  const [tareasFiltradas, setTareasFiltradas] = useState([])
  const [filtro, setFiltro] = useState(null) //digo que es inicialmente nulo el filtro
  const [tareaEditable, setTareaEditable] = useState(null)


  //hacemos un useEffect que se usa cuando quiero que cambie algo que va a depender de otra variable dentro del componente
  useEffect(() => {
    //console.log(deberes);
    //console.log(filtro);

    if (filtro) {
      const temporalDeberesFiltrados = deberes.filter((deberes) => {

        return (
          filtro === deberes.categoria
        )
      })
      setTareasFiltradas(temporalDeberesFiltrados)
    } else {
      setTareasFiltradas(deberes)
    }
  }, [filtro, deberes])


  const addDeberes = (newDeberes) => {
    //console.log(newDeberes);
    setDeberes([...deberes, newDeberes]) //para modificar el arreglo, voy a incluir lo que tenia antes con el ...deberess y lo que añado nuevo
  }

  const elimiarTarea = (idTarea) => {
    const temporalTarea = deberes.filter((deberes) => { //temporalTarea  es un arreglo que guarda cuando el id no es igual al id que le he adado a eliminar
      return (
        deberes.id !== idTarea
      )
    })
    setDeberes(temporalTarea)
  }

  const editarTarea = (deberes) => {
    //console.log(deberes);
    setModalTarea(true)
    setTareaEditable(deberes)
  }


  const editTarea = (editableTarea) => {
    //console.log(editableTarea);

    //map de gastos y sustituir el mismo id
    const temporalTareas = deberes.map((deberes) => {
      if (deberes.id === editableTarea.id) {
        return editableTarea
      } else {
        return deberes
      }
    })
    //cambiamos el array de gastos completo x el nuevo ya editado
    setDeberes(temporalTareas)
    //setModal(false) // esto es que al dar editar, se cierra el modal cuando editamos un gasto, lo he quitado de aqui porque en el modal lo que quitado del else, entonces pasa siempre
  }
  //funcion para editar el gasto, cuando damos click en el boton editar se nos muestra el modal 
  const viewModalEditarTarea = (deberes) => {
    //  console.log(deberes);
    setModalTarea(true)
    setTareaEditable(deberes)
  }
  //funcion para editar el modal y que se anada una nueva
  const handleAddTarea = () => {
    setModalTarea(true)
    setTareaEditable(null)
  }

  return (
    <>
      <div className="header">
        <h1>Planificador de Tareas</h1>
      </div>

      {/*esto es para que se muestre solo el mensaje de k no hay tareas, cuando el array es igual a 0*/}
      {deberes.length === 0 ? <h1>No hay tareas pendientes</h1> :
        <>
          <div className="gastosMain">
            <FiltrarTareas setFiltro={setFiltro} />

            <div className="listado-gastos contenedor">

              {tareasFiltradas.map((deberes) => {
                return (
                  <>
                    <Deberes key={deberes.id} deberes={deberes} eliminarTarea={elimiarTarea} editarTarea={editarTarea} viewModalEditarTarea={viewModalEditarTarea} />
                    <NuevaTarea handleAddTarea={handleAddTarea} />
                  </>
                )
              })}

            </div>
          </div>
        </>
      }
      <NewTask setModalTarea={setModalTarea} />
      {modalTarea && <ModalTarea setModalTarea={setModalTarea} addDeberes={addDeberes} tareaEditable={tareaEditable} editTarea={editTarea} />}

    </>
  )
}

export default Tareas


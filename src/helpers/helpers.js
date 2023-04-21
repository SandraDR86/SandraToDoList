//como convertir fecha en string, formatear fecha

export const formatearFecha = (fecha) => {
    let newFecha = new Date(fecha);
    let options = { year: 'numeric', month: 'long', day: 'numeric' };

    return(
        newFecha.toLocaleDateString("es-ES", options)
    );
}

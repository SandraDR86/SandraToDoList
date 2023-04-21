import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Tareas from './pages/tareas';
import userEvent from '@testing-library/user-event'


//1.Comprobar que se muestra el título de la página Nueva Tarea
test('renderizar titulo pagina tareas', () => {
    render(
        <BrowserRouter>
            <Tareas />
        </BrowserRouter>
    )
    const titulo = screen.getByText(/PLANIFICADOR DE TAREAS/i);
    expect(titulo).toBeInTheDocument();
});

//2.Comprobar que, al presionar el botón de Añadir tareas (+), se abre el modal

test('comprobar que al presionar el boton + se abre el modal de tareas', () => {
    render(
        <BrowserRouter>
            <Tareas />
        </BrowserRouter>
    )
    const iconoAddTarea = screen.getByRole("img", { name: /iconoNuevaTarea/i })
    userEvent.click(iconoAddTarea)
    expect(iconoAddTarea).toBeInTheDocument()

})


//3.Mostrar mensaje de error cuando los campos del formulario de Añadir estén vacíos

describe("elementos pantalla modal", () => {
    beforeEach(async () => {
        render(
            <BrowserRouter>
                <Tareas />
            </BrowserRouter>
        )
    })
    test('Mostrar mensaje de error cuando los campos del formulario de Añadir estén vacíos', async () => {

        const iconoAddTarea = await screen.findByAltText("iconoNuevaTarea")
        await waitFor(() => userEvent.click(iconoAddTarea))
        const botonAñadirTarea = screen.queryByRole("button", { name: /Añadir Tarea/i })
        userEvent.click(botonAñadirTarea)
        const mensajeError = await screen.findByText(/tarea requerida/i)
        expect(mensajeError).toBeInTheDocument()
        const mensajeError1 = await screen.findByText(/categoria requerida/i)
        expect(mensajeError1).toBeInTheDocument()
    })
    // test('Mostrar mensaje de error cuando los campos del formulario de Añadir estén vacíos', async () => {

    //     const iconoAddTarea = await screen.findByAltText("iconoNuevaTarea")
    //     await waitFor(() => userEvent.click(iconoAddTarea))
    //     const botonAñadirTarea = screen.queryByRole("button", { name: /Añadir Tarea/i })
    //     userEvent.click(botonAñadirTarea)
    //     const mensajeError = await screen.findByText(/categoria requerida/i)
    //     expect(mensajeError).toBeInTheDocument()
    // })
})

//4. Comprobar que se crea correctamente una tarea

test("se crean correctamente las tareas", async () => {
    render(
        <BrowserRouter>
            <Tareas />
        </BrowserRouter>
    );
    const abrirModal = await screen.findByAltText("iconoNuevaTarea");
    await waitFor(() => userEvent.click(abrirModal));
    const inputAddTarea = await screen.findByPlaceholderText(/insertar tarea/i);
    await waitFor(() => userEvent.type(inputAddTarea, "comprar"));
    const selectCategory = screen.queryByRole("combobox");
    userEvent.selectOptions(selectCategory, "Hogar");
    const botonAñadir = await screen.findByRole("button", { name: /añadir tarea/i });
    await waitFor(() => userEvent.click(botonAñadir));
    const tareaCreada = await screen.findByText(/comprar/i)
    expect(tareaCreada).toBeInTheDocument()
});

//5. comprobar que se elimina correctamente una tarea
test("comprobar que se elimina correctamente una tarea", async () => {
    render(
        <BrowserRouter>
            <Tareas />
        </BrowserRouter>
    );
    const abrirModal = await screen.findByAltText("iconoNuevaTarea");
    await waitFor(() => userEvent.click(abrirModal));
    const inputAddTarea = await screen.findByPlaceholderText(/insertar tarea/i);
    await waitFor(() => userEvent.type(inputAddTarea, "comprar"));
    const selectCategory = screen.queryByRole("combobox");
    userEvent.selectOptions(selectCategory, "Hogar");
    const botonAñadir = await screen.findByRole("button", { name: /añadir tarea/i });
    await waitFor(() => userEvent.click(botonAñadir));
    const botonBorrar = await screen.findByRole("button", { name: /eliminar/i })
    await waitFor(() => userEvent.click(botonBorrar));
    expect(botonBorrar).not.toBeInTheDocument()
});



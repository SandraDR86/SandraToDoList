// import { render, screen, waitFor } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';
// import userEvent from '@testing-library/user-event'

// describe("mostrar elementos de la pantalla inicio", () => {

//   beforeEach(() => {
//     render( //tenemos k renderizar app y el provider k es browser router

//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     )
//   })

//   test('renderizar titulo Planificador de gastos', () => {

//     const linkElement = screen.getByText(/PLANIFICADOR DE GASTOS/i);
//     expect(linkElement).toBeInTheDocument();
//   });

 

//   //vamos a testear que se muestra el boton añadir en el App

//   test('comprobar que el boton añadir se renderiza correctamente', () => {

//     const botonAdd = screen.queryByRole("button", { name: /Add/i })
//     expect(botonAdd).toBeInTheDocument()
//   })

//   //Comprobar que al hacer click en el botón de añadir, si el campo presupuesto está vacío, muestre un mensaje de error

//   test('mensaje de error al estar presupuesto vacio', async () => {

//     const botonAdd = screen.queryByRole("button", { name: /Add/i })
//     userEvent.click(botonAdd)
//     //creamos otra variable para seleccionar el mensaje de error
//     const mensajeError = await screen.findByText(/Presupuesto Requerido/i)
//     expect(mensajeError).toBeInTheDocument()
//   })

// }
// )

// // vamos a hacer mas test en otra pantalla, con lo cual necesito un nuevo describe
// describe("mostrar elementos de la pantalla datos presupuesto", () => {

//   beforeEach(async () => {
//     render(

//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     )
//     const inputPresupuesto = screen.queryByRole("spinbutton")
//     await waitFor(() => userEvent.type(inputPresupuesto, "500"))
//     const botonAdd = screen.queryByRole("button", { name: /Add/i })
//     await waitFor(() => userEvent.click(botonAdd))

//   })
//   //HACEMOS LOS TEST

//   test('que aparezca el boton resetear presupuesto', async () => {

//     const botonResetear = await screen.findByRole("button", { name: /resetear presupuesto/i })
//     expect(botonResetear).toBeInTheDocument()
//   })

//   test('Comprobar que se muestra la imagen del añadir gasto, el simbulo +', async () => {
//     const iconoGasto = await screen.findByAltText("icono-nuevoGasto")
//     expect(iconoGasto).toBeInTheDocument()
//   })
  
//   // test('Comprobar que se muestre el importe del presupuesto', async () => {
//   //   const importePresupuesto = await screen.findByText("£500")
//   //   expect(importePresupuesto).toBeInTheDocument()
//   // })


//   test('Comprobar  que se muestre definir presupuesto, (que al resetear el presupuesto nos lleve a la pantalla de inicio donde aparece Definir presupuesto)', async () => {
//     const botonResetear = await screen.findByRole("button", { name: /resetear presupuesto/i })
//     await waitFor(() => userEvent.click(botonResetear))
//     const definitPresupuesto = await screen.findByText(/Definir presupuesto/i)
//     expect(definitPresupuesto).toBeInTheDocument()
//   })
// })
// describe("mostrar elementos en el modal de add gastos", () => {

//   beforeEach(async () => {
//     render(

//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     )
//     const inputPresupuesto = screen.queryByRole("spinbutton")
//     await waitFor(() => userEvent.type(inputPresupuesto, "500"))
//     const botonAdd = screen.queryByRole("button", { name: /Add/i })
//     await waitFor(() => userEvent.click(botonAdd))
//     const iconoGastoMas = await screen.findByAltText("icono-nuevoGasto")
//     await waitFor (()=>userEvent.click(iconoGastoMas))
//   })

//   test("que se muestre titulo nuevo gasto",async ()=>{
//     const nuevoGasto = await screen.findByText(/nuevo gasto/i)
//     expect(nuevoGasto).toBeInTheDocument()
//   })
//    test('renderizar titulo Planificador de gastos', () => {

//     const linkElement = screen.getByText(/PLANIFICADOR DE GASTOS/i);
//     expect(linkElement).toBeInTheDocument();
//   });
// })
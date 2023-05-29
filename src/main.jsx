import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {InputsProvider} from './context/InputsProvider'
import Layout from './Components/Layout'
import DatosCliente from './Components/pages/DatosCliente'
import DireccionApartamento from './Components/pages/direccionApartamento'
import Caracteristicas from './Components/pages/caracteristicas'
import Resumen from './Components/pages/resumen'
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DatosCliente/>
      },
      {
        path: '/datos-cliente',
        element: <DatosCliente/>
      },
      {
        path: '/direccion-apartamento',
        element: <DireccionApartamento/>
      },
      {
        path: '/caracteristicas',
        element: <Caracteristicas/>
      },
      {
        path: '/resumen',
        element: <Resumen/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InputsProvider>
      <RouterProvider router={router}/>
    </InputsProvider>
  </React.StrictMode>,
)

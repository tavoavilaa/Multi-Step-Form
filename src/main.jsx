import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import './index.css'
import DatosCliente from './Components/pages/datosCliente'
import DireccionApartamento from './Components/pages/direccionApartamento'
import Caracteristicas from './Components/pages/caracteristicas'
import Resumen from './Components/pages/resumen'


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
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

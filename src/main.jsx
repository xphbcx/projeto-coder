import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './router/index.jsx'
import NavBar from './components/NavBar/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <MantineProvider>
      <BrowserRouter>
        <NavBar/>
        <Rotas />
      </BrowserRouter>
    </MantineProvider>
)

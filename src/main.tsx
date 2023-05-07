import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//REDUX, QUERY
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { questionsApiSlice } from './store/api/questionsApiSlice.ts'

//ROUTER
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={questionsApiSlice}>
          <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
)

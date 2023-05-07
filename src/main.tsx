import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//Redux, query
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { questionsApiSlice } from './store/api/questionsApiSlice.ts'

import './index.css'

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

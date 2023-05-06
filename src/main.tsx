import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

//Redux, query
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { questionsApiSlice } from './store/api/questionsApiSlice.ts'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={questionsApiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)

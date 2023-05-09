import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

//REDUX, QUERY
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
// import { questionsApiSlice } from './store/api/questionsApiSlice.ts'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storeConstructor from './store/storeConstructor.ts'

const { persistor, store } = storeConstructor()


//ROUTER
import { BrowserRouter } from 'react-router-dom'
import Loading from './assets/Loading.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

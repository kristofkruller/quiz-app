import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { questionsApiSlice } from './api/questionsApiSlice'

export const store = configureStore({
  reducer: {
    [questionsApiSlice.reducerPath]: questionsApiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(questionsApiSlice.middleware),
});
setupListeners(store.dispatch);
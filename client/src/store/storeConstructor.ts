//REDUX
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import rootReducer from './rootReducer';
import { questionsApiSlice } from './slices/questionsApiSlice'

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [], //things u want to persist
  // blacklist: [], //things u dont
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default() => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: {
          //ignore all the action types it dispatches
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(questionsApiSlice.middleware)
    ],
  });

  const persistor = persistStore(store);
  return { store, persistor };
}

// setupListeners(store.dispatch);

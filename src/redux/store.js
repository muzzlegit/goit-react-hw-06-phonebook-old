import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { 
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import contactsReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter']
  }

const store = configureStore({
    reducer: persistReducer(contactsPersistConfig, contactsReducer) ,
    devTools: process.env.NODE_ENV === 'development',
    middleware: [...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }), logger]
});
const persistor = persistStore(store);

export {store, persistor};
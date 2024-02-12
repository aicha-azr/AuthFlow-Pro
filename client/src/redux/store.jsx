import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Importez votre racine de reducers (si vous avez plusieurs reducers)

const store = configureStore({
  reducer: rootReducer, // Passez votre reducer racine
  // Autres options de configuration du magasin peuvent être ajoutées ici
});

export default store;

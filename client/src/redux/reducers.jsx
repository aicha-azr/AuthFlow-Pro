import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
// Importez d'autres reducers si vous en avez

const rootReducer = combineReducers({
  auth: authReducer,
  // Ajoutez d'autres reducers ici
});

export default rootReducer;

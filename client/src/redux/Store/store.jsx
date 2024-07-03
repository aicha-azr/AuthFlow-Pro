import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from '../Slices/authSlices';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  
});

export default store;


export const useAppDispatch = () => useDispatch();

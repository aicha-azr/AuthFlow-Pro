import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Fonction pour afficher une notification d'erreur
const handleError = (err) => {
  toast.error(err, {
    position: "top-right",
    transition: Zoom,
    className: "z-30",
  });
  console.error(err);
};

// Fonction pour afficher une notification de succès
const handleSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    transition: Zoom,
    className: "z-30",
  });
  console.log(msg);
};

// Fonction pour définir un cookie
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

// Fonction pour obtenir un cookie
const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Fonction pour effacer un cookie
const eraseCookie = (name) => {
  document.cookie = name + '=; Max-Age=-99999999;';
};

// API pour l'inscription
export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/signup', userData);
      handleSuccess('Account created successfully');
      return response.data;
    } catch (error) {
      handleError(error);
      return rejectWithValue('Failed to create an account');
    }
  }
);

// API pour la connexion
export const login = createAsyncThunk(
  'user/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/login', userData);
      handleSuccess('You are logged in successfully');
      setCookie("jwtToken", response.data.token, 1);
      return response.data;
    } catch (error) {
      handleError('Failed to login');
      return rejectWithValue('Failed to login');
    }
  }
);

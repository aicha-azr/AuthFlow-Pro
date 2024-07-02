import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// Fonction pour créer un cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  // Fonction pour récupérer un cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  // Fonction pour supprimer un cookie
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
  }
  
  // Exemple d'utilisation
  
  
  // Pour récupérer le token
  var storedToken = getCookie("token");
  console.log(storedToken);
  //signup api
export const signup = createAsyncThunk(
    '/signup',
    async (_,userData, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:8080/signup', userData);
        console.log(response.data)
        return response.data;

      } catch (error) {
        return rejectWithValue('Failed to create an account');
      }
    }
  );
  //login
  export const login = createAsyncThunk(
    '/login',
    async(_,userData, {rejectWithValue}) =>{
        try{
            const response = await axios.post('http://localhost:8080/login', userData);
            console.log(response);
            setCookie("token", response.data.token, 1);
            return response.data;
        }catch(e){
            return rejectWithValue('Failed to login')
        }
    }
  );
  //home api
  export const home = createAsyncThunk(
    '/home',
    async(_, {rejectWithValue}) =>{
      try{
        const response = await axios.get('http://localhost:8080/home');
        console.log(response.data)
        return response.data;
      }catch(e){
        return rejectWithValue('Failed to go home page')
      }
    }
  )
 
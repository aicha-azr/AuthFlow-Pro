import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to erase a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Signup API
export const signup = createAsyncThunk(
    '/signup',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8080/signup', userData);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to create an account');
        }
    }
);

// Login API
export const login = createAsyncThunk(
    '/login',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8080/login', userData);
            console.log(response.data);
            setCookie("jwtToken", response.data.token, 1);
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to login');
        }
    }
);

// Home API
export const dashboard = createAsyncThunk(
    '/home',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:8080/home');
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to go home page');
        }
    }
);

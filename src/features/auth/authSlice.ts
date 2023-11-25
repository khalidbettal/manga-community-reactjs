/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/api/apiService';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    try {
      const response = await api.post('/login', credentials);
      return response.data;
    } catch (error : any) {
      throw error.response.data;
    }
  }
);

export const register = createAsyncThunk(
    'auth/register',
    async (userData) => {
      try {
        const response = await api.post('/register', userData);
        return response.data;
      } catch (error : any) {
        throw error.response.data;
      }
    }
  );
  

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.loading = false;
      localStorage.removeItem('user');
      window.location.href = '/login';
    },
  },
  extraReducers: {
    [`${login.pending}`]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [`${login.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      if(state.user) {
        localStorage.setItem('user', JSON.stringify(state.user.user));
        window.location.href = '/';
      }
    },
    [`${login.rejected}`]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [`${register.pending}`]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [`${register.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      if(state.user) {
        localStorage.setItem('user', JSON.stringify(state.user.user));
        window.location.href = '/';
      }
    },
    [`${register.rejected}`]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    }
    }

});

export const { logout } = authSlice.actions;

export default authSlice.reducer;


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
    // Other reducers like logout, etc. can be added here
  },
  extraReducers: {
    [`${login.pending}`]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [`${login.fulfilled}`]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [`${login.rejected}`]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;


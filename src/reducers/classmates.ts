import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ClassmatesRequest, ClassmatesResponse } from '../api/types';
import { toast } from 'react-toastify';
import { getClassmates } from '../api/classmates';

export interface ClassmatesState {
  data: ClassmatesResponse[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ClassmatesState = {
  data: null,
  status: 'idle',
};

export const getClassmatesAsync = createAsyncThunk(
  'user/classmates',
  async ({classId}: ClassmatesRequest) => {
    const response = await getClassmates(classId);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Произошла ошибка')
    }  
  }
);

export const classmatesSlice = createSlice({
  name: 'classmates',
  initialState,
  reducers: {
    clearUserClassmates: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClassmatesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getClassmatesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserClassmates } = classmatesSlice.actions;

export const classmates = (state: RootState) => state.classmates;


export default classmatesSlice.reducer;

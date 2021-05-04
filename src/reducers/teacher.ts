import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { TeacherRequest, TeacherResponse } from '../api/types';
import { toast } from 'react-toastify';
import { getTeacher } from '../api/teacher';

export interface TeacherState {
  data: TeacherResponse[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TeacherState = {
  data: null,
  status: 'idle',
};

export const getTeacherAsync = createAsyncThunk(
  'user/teacher',
  async ({classId}: TeacherRequest) => {
    const response = await getTeacher(classId);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Произошла ошибка')
    }  
  }
);

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    clearUserTeacher: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeacherAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTeacherAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserTeacher } = teacherSlice.actions;

export const teacher = (state: RootState) => state.teacher;


export default teacherSlice.reducer;

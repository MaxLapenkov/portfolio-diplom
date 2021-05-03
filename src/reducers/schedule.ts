import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ClassScheduleRequest, ClassScheduleResponse } from '../api/types';
import { toast } from 'react-toastify';
import { getClassSchedule } from '../api/schedule';

export interface ClassScheduleState {
  data: ClassScheduleResponse[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ClassScheduleState = {
  data: null,
  status: 'idle',
};

export const getClassScheduleAsync = createAsyncThunk(
  'user/schedule',
  async ({classId}: ClassScheduleRequest) => {
    const response = await getClassSchedule(classId);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Произошла ошибка')
    }  
  }
);

export const schoolScheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    clearUserSchedule: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClassScheduleAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getClassScheduleAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserSchedule } = schoolScheduleSlice.actions;

export const schedule = (state: RootState) => state.schedule;


export default schoolScheduleSlice.reducer;

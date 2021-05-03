import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PupilPerfomanceRequest, PupilPerfomanceResponse } from '../api/types';
import { toast } from 'react-toastify';
import { getPupilPefomance } from '../api/perfomance';

export interface PupilPerfomanceState {
  data: PupilPerfomanceResponse[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PupilPerfomanceState = {
  data: null,
  status: 'idle',
};

export const getPupilPerfomanceAsync = createAsyncThunk(
  'user/perfomance',
  async ({pupilId}: PupilPerfomanceRequest) => {
    const response = await getPupilPefomance(pupilId);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Произошла ошибка')
    }  
  }
);

export const pupilPerfomanceSlice = createSlice({
  name: 'perfomance',
  initialState,
  reducers: {
    clearUserPerfomance: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPupilPerfomanceAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPupilPerfomanceAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserPerfomance } = pupilPerfomanceSlice.actions;

export const perfomance = (state: RootState) => state.perfomance;


export default pupilPerfomanceSlice.reducer;

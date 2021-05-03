import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PupilOlympiadRequest, PupilOlympiadResponse } from '../api/types';
import { toast } from 'react-toastify';
import { getPupilOlympiad } from '../api/olympiad';

export interface PupilOlympiadState {
  data: PupilOlympiadResponse[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PupilOlympiadState = {
  data: null,
  status: 'idle',
};

export const getPupilOlympiadAsync = createAsyncThunk(
  'user/olympiad',
  async ({pupilId}: PupilOlympiadRequest) => {
    const response = await getPupilOlympiad(pupilId);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Произошла ошибка')
    }  
  }
);

export const pupilOlympiadSlice = createSlice({
  name: 'olympiad',
  initialState,
  reducers: {
    clearUserOlympiad: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPupilOlympiadAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPupilOlympiadAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserOlympiad } = pupilOlympiadSlice.actions;

export const olympiad = (state: RootState) => state.olympiad;


export default pupilOlympiadSlice.reducer;

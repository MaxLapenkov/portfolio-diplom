import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { PupilAchievementRequest, PupilAchievementResponse } from '../api/types';
import { toast } from 'react-toastify';
import { getPupilAchievement } from '../api/achievement';

export interface PupilAchievementState {
  data: PupilAchievementResponse[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PupilAchievementState = {
  data: null,
  status: 'idle',
};

export const getPupilAchievementAsync = createAsyncThunk(
  'user/achievement',
  async ({pupilId}: PupilAchievementRequest) => {
    const response = await getPupilAchievement(pupilId);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Произошла ошибка')
    }  
  }
);

export const pupilAchievementSlice = createSlice({
  name: 'achievement',
  initialState,
  reducers: {
    clearUserAchievement: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPupilAchievementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPupilAchievementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserAchievement } = pupilAchievementSlice.actions;

export const achievement = (state: RootState) => state.achievement;


export default pupilAchievementSlice.reducer;

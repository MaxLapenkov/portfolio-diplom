import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { SchoolAnnouncementRequest, SchoolAnnouncementResponse } from '../api/types';
import { toast } from 'react-toastify';
import { getSchoolAnnouncements } from '../api/announcement';

export interface SchoolAnnouncementState {
  data: SchoolAnnouncementResponse[] | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: SchoolAnnouncementState = {
  data: null,
  status: 'idle',
};

export const getSchoolAnnouncementAsync = createAsyncThunk(
  'user/announcement',
  async ({schoolId}: SchoolAnnouncementRequest) => {
    const response = await getSchoolAnnouncements(schoolId);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Произошла ошибка')
    }  
  }
);

export const schoolAnnouncementSlice = createSlice({
  name: 'announcement',
  initialState,
  reducers: {
    clearUserAnnouncement: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSchoolAnnouncementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getSchoolAnnouncementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserAnnouncement } = schoolAnnouncementSlice.actions;

export const announcement = (state: RootState) => state.announcement;


export default schoolAnnouncementSlice.reducer;

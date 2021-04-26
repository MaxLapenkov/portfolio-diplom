import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { loginUser } from '../api/login';
import { UserDataRequest, UserDataResponse } from '../api/types';
import { toast } from 'react-toastify';

export interface UserDataState {
  data: UserDataResponse | null;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UserDataState = {
  data: null,
  status: 'idle',
};

export const getUserDataAsync = createAsyncThunk(
  'user/getData',
  async ({login, password}: UserDataRequest) => {
    const response = await loginUser(login, password);
    if  (response.ok) {
      return response.json();
    } else {
      console.log(response.status)
      toast('Неверен логин или пароль, попробуйте снова')
    }  
  }
);

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.data = null
    },
    setUserData: (state, action: PayloadAction<UserDataResponse>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload
      });
  },
});

export const { clearUserData, setUserData } = userDataSlice.actions;

export const userData = (state: RootState) => state.userData;


export default userDataSlice.reducer;

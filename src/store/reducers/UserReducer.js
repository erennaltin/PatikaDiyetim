import {createSlice} from '@reduxjs/toolkit';

export const UserSlice = createSlice({
  name: 'User',
  initialState: {
    user: null,
    accessToken: '',
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SET_ACCESS_TOKEN: (state, action) => {
      state.accessToken = action.payload;
    },
    LOG_OUT: state => {
      state.user = null;
    },
    CLEAN_ACCESS_TOKEN: state => {
      state.accessToken = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {SET_USER, SET_ACCESS_TOKEN, LOG_OUT, CLEAN_ACCESS_TOKEN} =
  UserSlice.actions;

export default UserSlice.reducer;
